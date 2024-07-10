const [[N], arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


arr.sort((a, b) => a - b);

let answer = 0;

for (let m = 1; m <= arr.length; m++) {
    if (arr[(N - m)] >= m) {
        answer = m;
    }

}

console.log(answer)
