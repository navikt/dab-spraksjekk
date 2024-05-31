import { Personvernbrudd } from './dictionaries';

const checkPersonvernbrudd = (userInput: string): string[] => {
    if (userInput === '') return []

    return Personvernbrudd.filter(ord =>
        userInput.toLowerCase().match('\\b' + ord.toLowerCase() + '\\b')
    )
}

export default checkPersonvernbrudd;
