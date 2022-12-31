let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = input[0].trim().split('').reverse();
const B = input[1].trim().split('').reverse();


const len = Math.max(A.length, B.length);

let carry = 0;
let answer = '';

for (let i = 0; i < len; i++) {
    const sum = parseInt(A[i] || 0) + parseInt(B[i] || 0) + carry;
    carry = Math.floor(sum / 10);

    answer += (sum % 10);
}

if (carry > 0) {
    answer += carry;
}

console.log(answer.split('').reverse().join(''));