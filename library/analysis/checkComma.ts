export interface CommaResult {
    matches: number;
}

const checkComma = (value: string): CommaResult => {
    const processedValue = value
        .replaceAll('Kontakt', '')
        .replaceAll(/\d+(?: \d+)/g, '')
        .toLowerCase();

    return { matches: processedValue.match(/\b( men)\b/g)?.length ?? 0 };
};

export default checkComma;
