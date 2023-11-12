const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


let line = 0;
const [N, M] = input[line++].split(' ').map(Number);


const keywords = {};

let answer = 0;
for (let i = 0; i < N; i++) {
    keywords[input[line++]] = true;
    answer++;
}

const answers = [];

for (let i = 0; i < M; i++) {
    input[line++]
        .split(',')
        .forEach(elem => {
            if (keywords[elem] === true) {
                answer--;
            }
            keywords[elem] = false;
        })
    answers.push(answer);
}

console.log(answers.join('\n'))

