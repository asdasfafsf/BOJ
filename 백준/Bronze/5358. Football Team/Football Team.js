const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

for (let line of input) {
    let result = '';
    for (let ch of line) {
        if (ch === 'i') result += 'e';
        else if (ch === 'e') result += 'i';
        else if (ch === 'I') result += 'E';
        else if (ch === 'E') result += 'I';
        else result += ch;
    }
    console.log(result);
}