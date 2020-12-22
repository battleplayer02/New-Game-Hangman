var programming_languages = [
    { phrase: "Early bird gets the worm", hint: "First come first served" , ques:"Question 1"},
    { phrase: "Read between the lines", hint: "Know someone" , ques:"Question 2"},
    { phrase: "I can eat a horse", hint: "Very hungry", ques:"Question 3" },
    { phrase: "Twenty Four seven", hint: "Always available" , ques:"Question 4"},
    { phrase: "Cat got your tounge", hint: "Unusually Quite" , ques:"Question 5"},
    { phrase: "One in one million", hint: "Special", ques:"Question 6" },
    { phrase: "I beg to differ", hint: "Politely Disagree" , ques:"Question 7"},
    { phrase: "Easier said than done", hint: "Not easy to do", ques:"Question 8" },
    { phrase: "Add insult to injury", hint: "Act in a way that makes a bad situation worse", ques:"Question 9" },
    { phrase: "Do not cry over spilled milk", hint: "There is no use in being upset", ques:"Question 10" },
];

export function randWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}