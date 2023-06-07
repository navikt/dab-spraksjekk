import checkAvloeserord, { AvloeserordResult } from './checkAvloeserord';
import checkLongParagraphs, { LongParagraphsResult } from './checkLongParagraphs';
import checkLongSentences, { LongSentencesResult } from './checkLongSentences';
import checkLongWords, { LongWordsResult } from './checkLongWords';

export interface TextCheck {
    longParagraphsResult: LongParagraphsResult;
    longSentencesResult: LongSentencesResult;
    longWordsResult: LongWordsResult;
    avloeserordResult: AvloeserordResult;
}

const checkText = (value: string): TextCheck => {
    return {
        longParagraphsResult: checkLongParagraphs(value),
        longSentencesResult: checkLongSentences(value),
        longWordsResult: checkLongWords(value),
        avloeserordResult: checkAvloeserord(value),
    };
};

export default checkText;
