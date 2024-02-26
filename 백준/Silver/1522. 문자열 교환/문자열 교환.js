const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const len = input.replace(/b/g, '').length;

let answer = 99999999999;
for (let i = 0; i < input.length; i++) {
    let count = 0;

    for (let j = i; j < len + i; j++) {
        if (input.charAt(j % input.length) === 'b') {
            count++;
        }
    }

    answer = Math.min(count, answer);
}
console.log(answer)