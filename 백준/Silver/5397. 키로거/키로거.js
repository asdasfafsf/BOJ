


const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const answer = [];
for (let i = 1; i < input.length; i++) {
    const str = input[i];

    const front = [];
    const back = [];

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (char === '<') {
            if (front.length) {
                back.push(front.pop());
            }
        } else if (char === '>') {
            if (back.length) {
                front.push(back.pop());
            }
        } else if (char === '-') {
            front.pop()
        } else {
            front.push(char);
        }
    }

    answer.push(front.join('').concat(back.reverse().join('')))
}

console.log(answer.join('\n'))
