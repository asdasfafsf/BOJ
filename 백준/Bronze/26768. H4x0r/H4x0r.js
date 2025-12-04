const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

let res = '';
for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === 'a') res += '4';
    else if (c === 'e') res += '3';
    else if (c === 'i') res += '1';
    else if (c === 'o') res += '0';
    else if (c === 's') res += '5';
    else res += c;
}

console.log(res);