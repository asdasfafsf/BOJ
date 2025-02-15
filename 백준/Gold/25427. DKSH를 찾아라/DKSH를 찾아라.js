const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const str = input[1];


let [d, dk, dks, dksh] = [0n, 0n, 0n, 0n];

for (let i = 0; i < str.length; i++) {
    const s = str[i];

    if (s === 'D') {
        d++;
    } else if (s === 'K') {
        dk += d;
    } else if (s === 'S') {
        dks += dk;
    } else if (s === 'H') {
        dksh += dks;
    }
}

console.log(dksh.toString())