const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


    
const answers = [];
for (let i = 0; i < input.length - 1; i++) {
    const arr = input[i].split('');
    const stack = [];

    let answer = 0;
    for (let j = 0; j < arr.length; j++) {
        const str = arr[j];

        if (str === '{') {
            stack.push('{');
        } else {
            if (stack.length === 0) {
                answer++;
                stack.push('{');
            } else if (stack.at(-1)  === '{') {
                stack.pop();
            }
        }
    }

    
    answers.push(`${i + 1}. ${(answer + stack.length / 2)}`);
}

console.log(answers.join('\n'))