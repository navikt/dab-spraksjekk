import { Accordion, Heading, Link, Button, Pagination } from '@navikt/ds-react';
import { useState } from 'react';
import { ReactComponent as ExternalLinkIcon } from './ExternalLink.svg';
import checkLongParagraphs from '../analysis/checkLongParagraphs';

interface Props {
    value: string;
}

function LongParagraphs({ value }: Props) {
    const { longParagraphs } = checkLongParagraphs(value);

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
        }));

    const pagesCount = Math.ceil(longParagraphs.length / pageSize);

    return (
        <>
            <Accordion.Item>
                <Accordion.Header>
                    {longParagraphs.length} {longParagraphs.length === 1 ? <>langt avsnitt</> : <>lange avsnitt</>}
                </Accordion.Header>
                <Accordion.Content>
                    <Heading spacing level="3" size="xsmall">
                        Skriv korte og enkle avsnitt
                    </Heading>
                    "Et avsnitt bør ha ett hovedbudskap og ikke ha mer enn to til tre setninger." -{' '}
                    <Link target="_blank" href="https://aksel.nav.no/artikkel/sprakarbeid?tema=innholdsarbeid">
                        Aksel
                        <ExternalLinkIcon />
                    </Link>
                    <Heading spacing level="3" size="xsmall">
                        Avsnitt med over tre setninger
                    </Heading>
                    <ul>
                        {longParagraphsInCurrentPage.map(
                            ({ index, paragraph, firstSentence }: (typeof longParagraphsInCurrentPage)[0]) => {
                                return (
                                    <li key={index}>
                                        {expanded[index] ? <>"{paragraph} </> : <>"{firstSentence} </>}
                                        <Button
                                            size="xsmall"
                                            variant="secondary"
                                            onClick={() => {
                                                setExpanded((prevExpanded: boolean[]) => {
                                                    const newExpanded = [...prevExpanded];
                                                    newExpanded[index] = !newExpanded[index];
                                                    return newExpanded;
                                                });
                                            }}
                                        >
                                            {expanded[index] ? 'Vis mindre' : 'Les mer'}
                                        </Button>
                                        "{' '}
                                        <b>
                                            ({paragraph.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|').length}
                                            &nbsp;setninger)
                                        </b>
                                    </li>
                                );
                            }
                        )}
                    </ul>
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
