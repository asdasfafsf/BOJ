
const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()

const operatorPriority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
};

const stack = [];
const answer = [];

for (let i = 0; i < input.length; i++) {
    const str = input.charAt(i);

    if (str === '(') {
        stack.push('(');
    } else if (str === ')') {
        let top = stack.at(-1);

        while ((top = stack.pop()) !== '(') {
            answer.push(top);
        }
    } else if (operatorPriority[str]) {
        const top = stack.at(-1);
    
        if (!top) {
            stack.push(str);
            continue;
        }

        let priority = operatorPriority[str];
        let topPriority = operatorPriority[top];

        while (priority <= topPriority) {
            answer.push(stack.pop());
            topPriority = operatorPriority[stack.at(-1)]
        } 
        stack.push(str);
    } else {
        answer.push(str)
    }
}

while (stack.length !== 0) {
    answer.push(stack.pop())
} 

console.log(answer.join(''))