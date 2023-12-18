const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = [];

for (let i = 1; i < input.length; i++) {
    const str = input[i];
    const stack = [];
    let isClosed = true;

    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);

        if (char === '(') {
            stack.push('(');
        } else {
            if (stack.length === 0) {
                isClosed = false;
                break;
            } else {
                stack.pop();
            }
        }
    }

    if (isClosed && stack.length === 0) {
        answer.push('YES');
    } else {
        answer.push('NO');
    }
}


console.log(answer.join('\n'))