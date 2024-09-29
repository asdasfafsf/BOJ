const [A, B, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)

const total = A + B;
const divisors = [];

for (let i = 1; i <= Math.ceil(Math.sqrt(total)); i++) {
    if (total % i === 0) {
        divisors.push(i);
        if (i !== total / i) {
            divisors.push(total / i);
        }
    }
}

divisors.sort((a, b) => b - a);

for (const divisor of divisors) {
    const remainder = A % divisor;
    if (Math.min(remainder, divisor - remainder) <= K) {
        console.log(divisor);
        break;
    }
}