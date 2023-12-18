const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();


const str = input;
const answer = Array.from({length: 26}, () => -1)

for (let i = 0; i < str.length; i++) {
    const idx = str.charCodeAt(i) - 'a'.charCodeAt(0);

    if (answer[idx] === -1) {
        answer[idx] = i;
    }
}

console.log(answer.join(' '))