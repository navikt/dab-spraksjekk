export interface LixResult {
    lix: number | undefined;
}

const checkLix = (value: string): LixResult => {
    const lettersInLongWord = 7;
    const punctuations = '!;.*?';

    const words = value.split(/\s+/);
    const punctuationCount = value.split('').reduce((acc, cur) => (punctuations.includes(cur) ? acc + 1 : acc), 0);
    const longWordsCount = words.reduce((acc, cur) => (cur.length >= lettersInLongWord ? acc + 1 : acc), 0);

    if (punctuationCount === 0) return { lix: undefined };

    const lix = Math.round(words.length / punctuationCount + (longWordsCount * 100) / words.length);

    return { lix };
};

export default checkLix;
