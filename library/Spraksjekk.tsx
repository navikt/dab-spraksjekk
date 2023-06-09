import React from 'react';
import { Accordion } from '@navikt/ds-react';
import {
    AvloeserordDictionary,
    CommaCheck,
    DuplicateWords,
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
    nrkDictionary?: boolean;
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
        nrkDictionary = true,
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
            {duplicateWords && <DuplicateWords value={value} />}
            {kansellistenDictionary && <KansellistenDictionary value={value} />}
            {nrkDictionary && <NrkDictionaries value={value} />}
            {avloeserordDictionary && <AvloeserordDictionary value={value} />}
            {commaCheck && <CommaCheck value={value} />}
            {personalData && <PersonalData value={value} />}
            {tools && <Tools value={value} />}
        </Accordion>
    );
};
