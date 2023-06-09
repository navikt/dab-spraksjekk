import checkAvloeserord, { AvloeserordResult } from './checkAvloeserord';
import checkLongParagraphs, { LongParagraphsResult } from './checkLongParagraphs';
import checkLongSentences, { LongSentencesResult } from './checkLongSentences';
import checkLongWords, { LongWordsResult } from './checkLongWords';
import checkDuplicateWords, { DuplicateWordsResult } from './checkDuplicateWords';
import checkKansellisten, { KansellistenResult } from './checkKansellisten';
import checkNrkDictionary, { NrkOrdResult } from './checkNrkDictionary';
import checkComma, { CommaResult } from './checkComma';
import checkPersonalData, { PersonalDataResult } from './checkPersonalData';

export interface TextCheck {
    longParagraphsResult: LongParagraphsResult;
    longSentencesResult: LongSentencesResult;
    longWordsResult: LongWordsResult;
    duplicateWordsResult: DuplicateWordsResult;
    kansellistenResult: KansellistenResult;
    nrkOrdResult: NrkOrdResult;
    avloeserordResult: AvloeserordResult;
    commaResult: CommaResult;
    personalDataResult: PersonalDataResult;
}

const checkText = (value: string): TextCheck => {
    return {
        longParagraphsResult: checkLongParagraphs(value),
        longSentencesResult: checkLongSentences(value),
        longWordsResult: checkLongWords(value),
        duplicateWordsResult: checkDuplicateWords(value),
        kansellistenResult: checkKansellisten(value),
        nrkOrdResult: checkNrkDictionary(value),
        avloeserordResult: checkAvloeserord(value),
        commaResult: checkComma(value),
        personalDataResult: checkPersonalData(value),
    };
};

export default checkText;
