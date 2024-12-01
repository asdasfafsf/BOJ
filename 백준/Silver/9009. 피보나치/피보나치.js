
const [N, ...testCases] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)


const fib = [0, 1];
const max = 1_000_000_000;

while (max > fib.at(-1)) {
    fib.push(fib.at(-1) + fib.at(-2));
}

const answer = [];
for (let testCase of testCases) {
    const result = [];

    for (let i = fib.length - 1; i >= 1; i--) {
        if (testCase >= fib[i]) {
            result.push(...Array(Math.floor(testCase / fib[i])).fill(fib[i]))
            testCase -= fib[i] * Math.floor(testCase / fib[i])
        }
    }
    answer.push(result.sort((a, b) => a - b).join(' '))
}

console.log(answer.join('\n'))