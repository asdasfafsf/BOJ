const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = input.shift();
input.sort();

let answer = N;

for (let i = input.length - 1; i > 0; i--) {
    const str = input[i];
    const str2 = input[i - 1]

    if (str.startsWith(str2)) {
        answer--;
    }   
}

console.log(answer)