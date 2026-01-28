const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

let out = '';
for (let i = 0; i < input.length; i++) {
    if (i === 0 || input[i] !== input[i - 1]) out += input[i];
}

process.stdout.write(out);