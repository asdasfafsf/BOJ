const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();


const alpha = Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).fill(0);

for (let i = 0; i < input.length; i++) {
    const s = 'z'.charCodeAt(0) - input.charCodeAt(i);

    if (s >= 0 && s <= 26) {
        alpha[s]++;
    }
}

console.log(Math.max(...alpha));