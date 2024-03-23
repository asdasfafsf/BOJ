const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const fq = []
const bq = [];
let count = 1;

for (let i = N - 1; i >= 0; i--) {
    const a = A[i];
    if (a === 1) {
       fq.push(count);
    } else if (a === 2) {
       const f = fq.pop();
       fq.push(count);
       if (f) {
        fq.push(f);
       }
    } else {
        bq.push(count);
    }

    count++;
}

const answer = [...fq.reverse(), ...bq];
console.log(answer.join(' '));