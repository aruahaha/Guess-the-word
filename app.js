function wordGenerator() {
    let wordArr = ["Hello", ",", "How", "do", "you", "?"];
    let radNum = Math.floor(Math.random() * 7);
    return wordArr[radNum];
}

console.log(wordGenerator());