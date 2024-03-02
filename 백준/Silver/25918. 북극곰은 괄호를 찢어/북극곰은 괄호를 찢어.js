const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const S = input[1];


let answer = 0;
const stack = [];

for (let i = 0; i < S.length; i++) {
    const str = S.charAt(i);

    if (str === ')') {
        if (stack.at(-1) === '(') {
            stack.pop();
        } else {
            stack.push(str);
        }
    } else {
        if (stack.at(-1) === ')') {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    answer = Math.max(answer, stack.length);
}

console.log(stack.length !== 0 ? -1 : answer);