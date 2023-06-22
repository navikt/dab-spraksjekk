import { Accordion, Heading, Link, Pagination } from '@navikt/ds-react';
import { useState } from 'react';
import { ReactComponent as ExternalLinkIcon } from './ExternalLink.svg';
import checkLongSentences from '../analysis/checkLongSentences';

interface Props {
    value: string;
}

function LongSentences({ value }: Props) {
    const longSentences = checkLongSentences(value);

    if (longSentences.length === 0) {
        return null;
    }

    const [page, setPage] = useState(1);

    const pageSize = 3;
    const indexOfLastPost = page * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const allFreq = Object.entries(longSentences).slice(indexOfFirstPost, indexOfLastPost);

    const pagesCount = Math.ceil(longSentences.length / pageSize);

    return (
        <>
            <Accordion.Item>
                <Accordion.Header>
                    {longSentences.length} {longSentences.length === 1 ? <>lang setning</> : <>lange setninger</>}
                </Accordion.Header>
                <Accordion.Content>
                    <Heading spacing level="3" size="xsmall">
                        Skriv korte og enkle setninger
                    </Heading>
                    Ifølge studier kan setninger med over 20 ord anses som vanskelige å lese -{' '}
                    <Link
                        target="_blank"
                        href="https://strainindex.wordpress.com/2012/04/30/longer-the-sentence-greater-the-strain/"
                    >
                        Nirmaldasan
                        <ExternalLinkIcon />
                    </Link>
                    <Heading spacing level="3" size="xsmall">
                        Setninger med over 20 ord
                    </Heading>
                    <ul>
                        {allFreq.map((wordFreq: [string, string]) => {
                            return (
                                <li key={wordFreq[0]}>
                                    "{wordFreq[1]}" <b>({wordFreq[1].split(/\s+/).length}&nbsp;ord)</b>
                                </li>
                            );
                        })}
                    </ul>
                    {longSentences.length > pageSize && (
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

export default LongSentences;
