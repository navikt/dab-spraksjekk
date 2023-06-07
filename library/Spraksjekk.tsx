import React from 'react';
import { Accordion } from '@navikt/ds-react';
import {
    AvloeserordDictionary,
    CommaCheck,
    DublicateWords,
    KansellistenDictionary,
    LongParagraphs,
    LongSentences,
    LongWords,
    NrkDictionaries,
    PersonalData,
    Tools,
} from './components';

interface Options {
    longParagraphs?: boolean;
    longSentences?: boolean;
    longWords?: boolean;
    duplicateWords?: boolean;
    kansellistenDictionary?: boolean;
    nrkDictionaries?: boolean;
    avloeserordDictionary?: boolean;
    commaCheck?: boolean;
    personalData?: boolean;
    tools?: boolean;
}

interface Props {
    value?: string;
    open?: boolean;
    options?: Options;
}

export const Spraksjekk = ({ value, open, options = {} }: Props) => {
    const {
        longParagraphs = true,
        longSentences = true,
        longWords = true,
        duplicateWords = true,
        kansellistenDictionary = true,
        nrkDictionaries = true,
        avloeserordDictionary = true,
        commaCheck = true,
        personalData = true,
        tools = true,
    } = options;

    if (!value || !open) {
        return null;
    }

    return (
        <Accordion>
            {longParagraphs && <LongParagraphs value={value} />}
            {longSentences && <LongSentences value={value} />}
            {longWords && <LongWords value={value} />}
            {/*<DublicateWords content={value} />*/}
            {/*<KansellistenDictionary content={value} />*/}
            {/*<NrkDictionaries content={value} />*/}
            {avloeserordDictionary && <AvloeserordDictionary value={value} />}
            {/*<CommaCheck content={value} />*/}
            {/*<PersonalData content={value} />*/}
            {/*<Tools content={value} />*/}
        </Accordion>
    );
};
