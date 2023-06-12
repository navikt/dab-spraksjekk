export interface WordFrequencyResult {
    frequencies: Record<string, number>;
}

const checkWordFrequency = (value: string): WordFrequencyResult => {
    const preprocessedValue = value
        .replaceAll(/\<\/(.?)\>/g, '')
        .replaceAll(/\<(.?)\>/g, '')
        .replaceAll(/\s+/g, ' ')
        .replace(/[^\w\sÆØÅæøå\/\\é-]/g, '');

    const words = preprocessedValue
        .toLowerCase()
        .split(/\s+/)
        .map((s) => s.replace(/[.,:?()!"]+/g, ''));

    const frequencies = words.reduce((acc: Record<string, number>, cur) => {
        if (cur === '') return acc;
        return {
            ...acc,
            [cur]: (acc[cur] ?? 0) + 1,
        };
    }, {});

    return { frequencies };
};

export default checkWordFrequency;
