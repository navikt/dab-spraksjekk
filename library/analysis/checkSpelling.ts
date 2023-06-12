import { Typo } from 'typo-js-ts';

export interface SpellingResult {
    mistakes: string[];
}

const checkSpelling = async (value: string): Promise<SpellingResult> => {
    const words = value
        .replaceAll('Kontakt', '')
        .replaceAll(/\d+(?: \d+)/g, '')
        .replace(/[-a-zA-Z\d@:%._\+~#=]{1,256}\.[a-zA-Z\d()]{1,6}\b([-a-zA-Z\d()@:%_\+.~#?&//=]*)/g, '')
        .replace(/[^\w\sÆØÅæøå\/\\é-]/g, '')
        .replace(/\n/g, ' ')
        .replace(/\d+/g, '')
        .replace(/\//g, ' ')
        .split(/\s+/);

    // @ts-ignore
    const dict = new Typo('no_NB', false, false, {
        dictionaryPath: 'library/analysis/dictionaries/hunspell-dictionaries',
    });

    const mistakes = await dict.ready.then(() => {
        let mistakes: string[] = words
            .filter((word) => !dict.check(word.toLowerCase()))
            .filter((mistakes) => !/^\s*$/.test(mistakes))
            .filter((mistake) => !mistake.match(/-/));

        return (mistakes = mistakes
            .filter((mistake, index) => mistakes.indexOf(mistake) === index)
            .filter((mistake) => mistake.length > 3));
    });

    return { mistakes };
};

export default checkSpelling;
