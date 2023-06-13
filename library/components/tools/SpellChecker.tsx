import React, { useState } from 'react';
import { Accordion, Heading, Button, Pagination } from '@navikt/ds-react';
import checkSpelling, { SpellingResult } from '../../analysis/checkSpelling';

interface Props {
    value: string;
}

function SpellChecker({ value }: Props) {
    const [misspellings, setMisspellings] = useState<string[]>([]);
    const [mispellingsCount, setMispellingsCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);
    const pageSize = 10;

    // Pagination pages
    const indexOfLastPost = page * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const allFreq = Object.entries(misspellings).slice(indexOfFirstPost, indexOfLastPost);

    // Number of pages in pagination
    const pagesCount = Math.ceil(mispellingsCount / pageSize);

    const onClickHandler = () => {
        setLoading(true);
        checkSpelling(value)
            .then(({ mistakes }: SpellingResult) => {
                setMisspellings(mistakes);
                setMispellingsCount(mistakes.length);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Accordion.Item>
            <Accordion.Header>Stavekontroll</Accordion.Header>
            <Accordion.Content>
                {loading ? (
                    <Button loading>Stavekontroll</Button>
                ) : (
                    <Button variant="secondary" onClick={onClickHandler}>
                        Stavekontroll
                    </Button>
                )}
                {misspellings.length > 0 ? (
                    <>
                        <hr className="språkhjelp-mb-6" />
                        <Heading aria-live="polite" spacing level="3" size="xsmall">
                            {misspellings.length} ord som må sjekkes
                        </Heading>
                        <ul>
                            {allFreq.map((wordFreq: [string, string]) => {
                                return <li key={wordFreq[0]}>"{wordFreq[1]}"</li>;
                            })}
                        </ul>
                        {mispellingsCount > pageSize && (
                            <div className="språkhjelp-pagination-container språkhjelp-mb-6">
                                <Pagination
                                    className="språkhjelp-pagination"
                                    page={page}
                                    onPageChange={setPage}
                                    count={pagesCount}
                                    size="small"
                                    siblingCount={0}
                                    boundaryCount={1}
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <hr className="språkhjelp-mb-6" />
                        <Heading aria-live="polite" spacing level="3" size="xsmall">
                            Fant ingen stavefeil.
                        </Heading>
                    </>
                )}
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default SpellChecker;
