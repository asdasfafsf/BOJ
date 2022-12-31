let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
const M = N;


const arr = [0,0];

for (let i = 2; i <= M; i++) {
    arr[i] = i;
}

for (let i = 2; i <= M; i++) {
    if (arr[i] == 0) {
        continue;
    }

    for (let j = 2 * i; j<= M; j+=i) {
        arr[j] = 0;
    }
}

const res = arr.filter(e => e != 0);

while (N != 1) {
    for (let i = 0; i < res.length; i++) {
        const value = res[i];

        if (N % value === 0) {
            N = N / value;
            console.log(value);
            break;
        }
    }
}

