const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .toString()
    .split('\n');

const [N, S] = input[0].split(' ');
let answer = 0;

for (let i = 1; i <= N; i++) {
    const [name, count] = input[i].split(' ');
    const words = name.split('_');

    if (words.includes(S)) {
        answer += Number(count);
    }
}

console.log(answer);