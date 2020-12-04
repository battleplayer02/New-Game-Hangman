var programming_languages = [
    "Guess The phrase",
];

export function randWord(){
    return programming_languages[Math.floor(Math.random() * programming_languages.length)].toUpperCase()
}