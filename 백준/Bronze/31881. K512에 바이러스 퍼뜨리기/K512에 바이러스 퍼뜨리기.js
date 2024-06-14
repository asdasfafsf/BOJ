const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, Q] = input[0].split(' ').map(Number);


const infested = Array(N + 1).fill(false);
let count = N;
const answer = []
for (let i = 1; i < input.length; i++) {
    const [query, value] = input[i].split(' ').map(Number);

    if (query === 1) {
        if (infested[value] === false) {
            infested[value] = true;
            count--;
        }
    } else if (query === 2) {
        if (infested[value] === true) {
            infested[value] = false;
            count++;
        }
    } else {
        answer.push(count);
    }
}

console.log(answer.join('\n'))