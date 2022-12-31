let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);



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

const res = arr.filter(e => {
    return e >= N;
});

if (res.length == 0) {
    console.log(-1);
} else {
    console.log(res.reduce((a, b) => a + b, 0));
    console.log(res[0]);
}
