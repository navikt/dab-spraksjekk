import checkAvloeserord, { AvloeserordResult } from './checkAvloeserord';
import checkLongParagraphs, { LongParagraphsResult } from './checkLongParagraphs';
import checkLongSentences, { LongSentencesResult } from './checkLongSentences';
import checkLongWords, { LongWordsResult } from './checkLongWords';
import checkDuplicateWords, { DuplicateWordsResult } from './checkDuplicateWords';
import checkKansellisten, { KansellistenResult } from './checkKansellisten';
import checkNrkDictionary, { NrkOrdResult } from './checkNrkDictionary';
import checkComma, { CommaResult } from './checkComma';
import checkPersonalData, { PersonalDataResult } from './checkPersonalData';
import checkLix, { LixResult } from './checkLix';
import checkWordCount, { WordCountResult } from './checkWordCount';
import checkWordFrequency, { WordFrequencyResult } from './checkWordFrequency';

interface ToolsResult {
    lixResult: LixResult;
    wordCountResult: WordCountResult;
    wordFrequencyResult: WordFrequencyResult;
}

export interface TextCheckerResult {
    longParagraphsResult: LongParagraphsResult;
    longSentencesResult: LongSentencesResult;
    longWordsResult: LongWordsResult;
    duplicateWordsResult: DuplicateWordsResult;
    kansellistenResult: KansellistenResult;
    nrkOrdResult: NrkOrdResult;
    avloeserordResult: AvloeserordResult;
    commaResult: CommaResult;
    personalDataResult: PersonalDataResult;
    toolsResult: ToolsResult;
}

const checkText = (value: string): TextCheckerResult => {
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
        toolsResult: {
            lixResult: checkLix(value),
            wordCountResult: checkWordCount(value),
            wordFrequencyResult: checkWordFrequency(value),
        },
    };
};

export default checkText;
