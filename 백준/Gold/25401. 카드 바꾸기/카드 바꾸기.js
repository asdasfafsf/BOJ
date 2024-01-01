
const [[N], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



let answer = N - 2;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        const diff = (arr[j] - arr[i]) / (j - i);


        if (diff != parseInt(diff)) {
            continue;
        }

        let sum = 0;
        let current = arr[i] - (diff * i);

        for (let k = 0; k < N; k++) {
            if (arr[k] !== current) {
                sum++;
            }
            current += diff;
        }
        answer = Math.min(sum, answer);
    }
}

console.log(answer);