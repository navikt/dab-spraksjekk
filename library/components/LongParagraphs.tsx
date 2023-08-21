import { Accordion, Link, Pagination, ReadMore } from '@navikt/ds-react';
import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import checkLongParagraphs from '../analysis/checkLongParagraphs';

interface Props {
    value: string;
}

function LongParagraphs({ value }: Props) {
    const longParagraphs = checkLongParagraphs(value);

    if (longParagraphs.length === 0) {
        return null;
    }

    const [page, setPage] = useState(1);
    const [expanded, setExpanded] = useState<boolean[]>([]);

    const firstSentenceRegex = /^[^.!?]*[.!?]/;

    const pageSize = 3;
    const indexOfLastPost = page * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;

    const longParagraphsInCurrentPage = Object.entries(longParagraphs)
        .slice(indexOfFirstPost, indexOfLastPost)
        .map((obj) => ({
            index: parseInt(obj[0]),
            paragraph: obj[1],
            firstSentence: obj[1].match(firstSentenceRegex)!![0],
            sentencesInParagraph: obj[1].replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|').length,
        }));

    const pagesCount = Math.ceil(longParagraphs.length / pageSize);

    return (
        <>
            <Accordion.Item>
                <Accordion.Header>
                    {longParagraphs.length} {longParagraphs.length === 1 ? <>langt avsnitt</> : <>lange avsnitt</>}
                </Accordion.Header>
                <Accordion.Content>
                    <p> Et avsnitt bør ha ett hovedbudskap og ikke ha mer enn to til tre setninger.</p>
                    {longParagraphsInCurrentPage.map((longParagraph) => {
                        const { paragraph, sentencesInParagraph, firstSentence, index } = longParagraph;
                        const truncatedHeader =
                            firstSentence.substring(0, 15) + '...' + ' (' + sentencesInParagraph + ' setninger)';
                        return (
                            <ReadMore key={index} header={truncatedHeader}>
                                {paragraph}
                            </ReadMore>
                        );
                    })}

                    <p>
                        Kilde:{' '}
                        <Link target="_blank" href="https://aksel.nav.no/artikkel/sprakarbeid?tema=innholdsarbeid">
                            Aksel
                            <ExternalLinkIcon />
                        </Link>
                    </p>
                    {longParagraphs.length > pageSize && (
                        <div>
                            <Pagination
                                page={page}
                                onPageChange={setPage}
                                count={pagesCount}
                                size="small"
                                siblingCount={0}
                                boundaryCount={1}
                            />
                        </div>
                    )}
                </Accordion.Content>
            </Accordion.Item>
        </>
    );
}

export default LongParagraphs;
