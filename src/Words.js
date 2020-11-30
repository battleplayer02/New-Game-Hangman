var programming_languages = [
    "python",
    "javascript",
    "java",
    "html",
    "css",
    "fortran"
];

export function randWord(){
    return programming_languages[Math.floor(Math.random() * programming_languages.length)].toUpperCase()
}