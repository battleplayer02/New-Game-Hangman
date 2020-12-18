var programming_languages = [
    { phrase: "Early bird gets the worm", hint: "First come first served" },
    { phrase: "Read between the lines", hint: "Know someone" },
    { phrase: "I can eat a horse", hint: "Very hungry" },
    { phrase: "Twenty Four seven", hint: "Always available" },
    { phrase: "Cat got your tounge", hint: "Unusually Quite" },
    { phrase: "One in one million", hint: "Special" },
    { phrase: "I beg to differ", hint: "Politely Disagree" },
    { phrase: "Easier said than done", hint: "Not easy to do" },
    { phrase: "Add insult to injury", hint: "Act in a way that makes a bad situation worse" },
    { phrase: "Do not cry over spilled milk", hint: "There is no use in being upset" },
];

export function randWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}