const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
    const str = input[i];
    const stack = [];
    let isClosed = true;

    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);

        if (char === '.') {
            break;
        }

        if (char === '[' || char === '(') {
            stack.push(char);
        } else if (char === ']') {
            if (stack.length === 0 || stack.at(-1) === '(') {
                isClosed = false;
                break;
            }

            stack.pop();
        } else if (char === ')') {
            if (stack.length === 0 || stack.at(-1) === '[') {
                isClosed = false;
                break;
            }

            stack.pop();
        }
        
    }

    if (isClosed && stack.length === 0) {
        answer.push('yes');
    } else {
        answer.push('no');
    }
}


console.log(answer.join('\n'))