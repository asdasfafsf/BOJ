const [[N], list] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const mores = Array(N + 1).fill(0);
const lesses = Array(N + 1).fill(0);

for (const elem of list) {
    if (elem > 0) {
        mores[elem]++;
    } else {
        lesses[-elem]++;
    }
}

for (let i = N - 1; i >= 1; i--) {
    mores[i] += mores[i + 1];
}

for (let i = 1; i <= N; i++) {
    lesses[i] += lesses[i - 1];
}

const answer = [];
for (let x = 0; x <= N; x++) {
    const cntMore = x + 1 <= N ? mores[x + 1] : 0;
    const cntLess = x - 1 >= 0 ? lesses[x - 1] : 0;
    if (cntMore + cntLess === x) { 
        answer.push(x)
    }
}

console.log(answer.length);
console.log(answer.join(' '));