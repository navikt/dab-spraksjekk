import { Kansellisten } from './dictionaries';

interface Kanselliord {
    kanselliord: string;
    alternativ_1: string;
    alternativ_2: string;
}

export interface KansellistenResult {
    matches: Kanselliord[];
}

const checkKansellisten = (value: string): KansellistenResult => {
    if (value === '') return { matches: [] };

    const kanselliordMatches = Kansellisten.filter((ord) => {
        return value.toLowerCase().match('\\b' + ord.kanselliord.toLowerCase() + '\\b');
    });

    return {
        matches: kanselliordMatches,
    };
};

export default checkKansellisten;
