const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);

const map = Object.fromEntries(input.slice(1, N + 1).map(elem =>[elem, true]));

let answer = 0;
for (let i = N + 1; i < input.length; i++) {
    if (map[input[i]]) {
        answer++;
    }
}
console.log(answer)