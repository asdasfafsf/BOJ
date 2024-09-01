const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let one = 0;
let max = -Infinity;
let zero = 0;

for (let i = 0; i < N; i++) {
    if (b[i] === 1) {
        one += a[i];
        zero -= a[i];
        max = Math.max(max, -a[i]);
    } else {
        zero += a[i];
        if (zero < a[i]) {
            zero = a[i];
        }
        max = Math.max(max, zero);
    }
}

console.log(one + max);