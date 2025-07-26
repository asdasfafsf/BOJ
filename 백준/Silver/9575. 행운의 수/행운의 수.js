const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

let index = 0;
let T = +input[index++];

while (T--) {
    const N = +input[index++];
    const A = input[index++].split(' ').map(Number);
    const M = +input[index++];
    const B = input[index++].split(' ').map(Number);
    const K = +input[index++];
    const C = input[index++].split(' ').map(Number);

    const numSet = new Set();
    
    for (const a of A) {
        for (const b of B) {
            for (const c of C) {
                const sum = (a + b + c).toString();

                if (sum.replace(/[58]/g, '') === '') {
                    numSet.add(sum);
                }
            }
        }
    }

    console.log(numSet.size);
}