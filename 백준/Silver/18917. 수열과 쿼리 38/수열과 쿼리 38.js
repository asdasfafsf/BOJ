const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1);



const answer = [];

let sum = 0;
let xor = 0;
for (const data of input) {
    const [operator, value] = data.split(' ').map(Number);

    if (typeof value === 'undefined') {
        if (operator === 3) {
            answer.push(sum);
        } else if (operator === 4) {
            answer.push(xor);
        }
    } else if (operator === 1) {
        sum += value;
        xor ^= value;
    } else if (operator === 2) {
        sum -= value;
        xor ^= value;
    }
}

console.log(answer.join('\n'));
