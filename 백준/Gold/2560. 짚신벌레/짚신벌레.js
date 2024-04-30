const [a, b, d, N] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


const bugs = [1];

let deads = 0;
let spawnable = 0;
let sum = 1;

for (let i = 1; i <= N; i++) {
    if (i - a >= 0) {
        spawnable = (spawnable + bugs[i - a]) % 1000;
    }

    if (i - b >= 0) {
        spawnable = (((spawnable - bugs[i - b]) % 1000) + 1000) % 1000;
    }

    if (i - d >= 0) {
        deads = (deads + bugs[i - d]) % 1000;
    }

    bugs[i] = spawnable % 1000;
    sum = (sum + spawnable) % 1000;
}

console.log( (sum - deads + 1000) % 1000)