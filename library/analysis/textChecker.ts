import {Avloeserord, Datatermer} from "./dictionaries";

const checkText = (text: string) => {
    return {
        ordlisteResultater: checkOrdliste(text),
        // Og resten
    }
}

interface AvløserordResult {
    importord: string
    avløserord: string
}

interface CheckDataTermerResult {
    ord: string
    bokmål: string
    nynorsk: string
    definisjon: string
}

export const checkOrdliste = (text: string): { datatermerResultater: CheckDataTermerResult[], ordlisteResultater: AvløserordResult[] } => {
    if (text === '') return { ordlisteResultater: [], datatermerResultater: [] }
    const ordlisteResultater = Avloeserord.avløserord.filter((ordliste) => {
        return text
            .toLowerCase()
            .match('\\b' + ordliste.importord.toLowerCase() + '\\b');
    });
    const datatermerResultater = Datatermer.datatermer.filter((datatermer) => {
        return text
            .toLowerCase()
            .match('\\b' + datatermer.ord.toLowerCase() + '\\b');
    });
    return { ordlisteResultater, datatermerResultater }
 }