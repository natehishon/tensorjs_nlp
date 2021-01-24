const input = "Who goes there?"

function normalize(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,'')
        .toLowerCase();
}

console.log(normalize(input));