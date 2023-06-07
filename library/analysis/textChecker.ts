import checkAvloeserord, { AvloeserordResult } from './checkAvloeserord';
import checkLongParagraphs, { LongParagraphsResult } from './checkLongParagraphs';
import checkLongSentences, { LongSentencesResult } from './checkLongSentences';
import checkLongWords, { LongWordsResult } from './checkLongWords';
import checkDuplicateWords, { DuplicateWordsResult } from './checkDuplicateWords';

export interface TextCheck {
    longParagraphsResult: LongParagraphsResult;
    longSentencesResult: LongSentencesResult;
    longWordsResult: LongWordsResult;
    duplicateWordsResult: DuplicateWordsResult;
    avloeserordResult: AvloeserordResult;
}

const checkText = (value: string): TextCheck => {
    return {
        longParagraphsResult: checkLongParagraphs(value),
        longSentencesResult: checkLongSentences(value),
        longWordsResult: checkLongWords(value),
        duplicateWordsResult: checkDuplicateWords(value),
        avloeserordResult: checkAvloeserord(value),
    };
};

export default checkText;
