const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [S, D] = input[0].split(' ').map(Number);

if (S < D) {
    console.log(-1);
} else {
    const a = (S + D) / 2;
    const b = (S - D) / 2;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        console.log(-1);
    } else {
        console.log(a + ' ' + b);
    }
}