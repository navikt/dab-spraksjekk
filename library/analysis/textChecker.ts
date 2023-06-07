import checkAvloeserord, { AvloeserordResult } from './checkAvloeserord';
import checkLongParagraphs, { LongParagraphsResult } from './checkLongParagraphs';

export interface TextCheck {
    longParagraphsResult: LongParagraphsResult;
    avloeserordResult: AvloeserordResult;
}

const checkText = (text: string): TextCheck => {
    return {
        longParagraphsResult: checkLongParagraphs(text),
        avloeserordResult: checkAvloeserord(text),
    };
};

export default checkText;
