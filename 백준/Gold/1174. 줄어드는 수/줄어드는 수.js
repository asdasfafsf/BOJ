const input = require('fs').readFileSync(0, 'utf-8').trim();
const N = +input;

const answers = [];
const stack = [];

for (let i = 0; i <= 9; i++) {
    stack.push([i, i]);
    answers.push(i);
}


while (stack.length) {
    const [num, lastDigit] = stack.pop();

    for (let i = 0; i < lastDigit; i++) {
        const next = num * 10 + i;
        stack.push([next, i]);
        answers.push(next);
    }
}

answers.sort((a, b) => a - b);
console.log(answers[N - 1] ?? -1); 