import { Accordion } from '@navikt/ds-react';
import Lix from './tools/Lix';
import WordCount from './tools/WordCount';
import WordFrequency from './tools/WordFrequency';
import SpellChecker from './tools/SpellChecker';

interface Props {
    value: string;
}

function Tools({ value }: Props) {
    return (
        <Accordion.Item>
            <Accordion.Header>Liks og ordtelling</Accordion.Header>
            <Accordion.Content>
                <Accordion>
                    <Lix value={value} />
                    <WordCount value={value} />
                    <WordFrequency value={value} />
                    <SpellChecker value={value} />
                </Accordion>
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default Tools;
