const input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n');

const [N, M] = input[0].split(' ').map(Number);

const set = new Set(input.slice(1, N + 1));

let answer = 0;
for (let i = N + 1; i < input.length; i++) {
    if (set.has(input[i])) {
        answer++;
    }
}
console.log(answer);