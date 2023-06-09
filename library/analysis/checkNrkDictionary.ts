import { Nrkordliste } from './dictionaries';

interface NrkOrd {
    id: string;
    ord: string;
    bruk: string;
    bokmaal: string;
    kilde: string;
    lenke: string;
}

export interface NrkOrdResult {
    matches: NrkOrd[];
}

const checkNrkDictionary = (value: string): NrkOrdResult => {
    if (value === '') return { matches: [] };

    const matches = Nrkordliste.filter((ord) => {
        return value.toLowerCase().match('\\b' + ord.ord.toLowerCase() + '\\b');
    });

    return { matches };
};

export default checkNrkDictionary;
