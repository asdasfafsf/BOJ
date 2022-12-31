const fs = require('fs');

const input = (fs.readFileSync('/dev/stdin').toString().trim().split('\n'));

const a = input[0].split(' ').map(e => parseInt(e.trim()));
const b = input[1].split(' ').map(e => parseInt(e.trim()));


const target = a[1];
let max = Number.MIN_VALUE;

for(let i = 0; i < b.length; i++) {
    const one = b[i];
    for (let j = i + 1; j < b.length; j++) {
        const two = b[j];
        for (let k = j + 1; k < b.length; k++) {
            const three = b[k];
            const sum = one + two + three;

            if (target >= sum) {
                max = Math.max(sum, max);
            }
        }
    }
}

console.log(max);