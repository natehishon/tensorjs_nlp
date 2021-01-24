const natural = require('natural');
const input = "Boom what up?"
const { TokenizerEn } = require('@nlpjs/lang-en')

function tokenize(text) {
    // return text.split(/\W+/g);
    return text.split(/[\s,.!?;:([\]'"¿¡)/]+/);
}

function tokenizeAgressive(text) {
    const tokenizer = new natural.AggressiveTokenizer();
    return tokenizer.tokenize(text);
}

function tokenizeTreebank(text) {
    const tokenizer = new natural.TreebankWordTokenizer();
    return tokenizer.tokenize(text);
}

function tokenizeNlpjs(text) {
    const tokenizer = new TokenizerEn();
    return tokenizer.tokenize(text);
}


console.log(tokenize(input))
console.log(tokenizeAgressive(input))
console.log(tokenizeTreebank(input))

