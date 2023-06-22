import { Accordion } from '@navikt/ds-react';
import checkDuplicateWords from '../analysis/checkDuplicateWords';

interface Props {
    value: string;
}

function DuplicateWords({ value: val }: Props) {
    const duplicateWords = checkDuplicateWords(val);

    if (duplicateWords.length === 0) {
        return null;
    }

    return (
        <Accordion.Item>
            <Accordion.Header>
                {duplicateWords.length === 1 ? (
                    <>1 gjentakelse av like ord</>
                ) : (
                    <>{duplicateWords.length} gjentakelser av like ord</>
                )}
            </Accordion.Header>
            <Accordion.Content>
                Like ord som er gjentatt etter hverandre:
                <ul>
                    {duplicateWords.map((duplicateWord, index) => (
                        <li key={index}>"{duplicateWord}"</li>
                    ))}
                </ul>
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default DuplicateWords;
