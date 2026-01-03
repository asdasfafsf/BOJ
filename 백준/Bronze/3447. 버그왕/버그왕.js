const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')


if (input[input.length - 1] === '') input.pop();

const result = input.map(line => {
    const stack = [];
    for (const char of line) {
        stack.push(char);
        const len = stack.length;
        if (len >= 3 && 
            stack[len - 3] === 'B' && 
            stack[len - 2] === 'U' && 
            stack[len - 1] === 'G') {
            stack.length -= 3;
        }
    }
    return stack.join('');
});

console.log(result.join('\n'));