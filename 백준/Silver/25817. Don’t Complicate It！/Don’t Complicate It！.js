const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .split('');


let answer = 0;
const stack = [];
for (const str of input) {
    if (str === '(') {
        stack.push(0);
    } else if (str === ')') {
        let current = stack.pop();
        answer += (current + 1);

        if (stack.length) {
            stack.push(Math.max(stack.pop(), current + 1));
        }
    }
}

console.log(answer)
  