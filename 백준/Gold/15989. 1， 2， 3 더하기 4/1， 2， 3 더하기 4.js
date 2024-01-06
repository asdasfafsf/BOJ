const [n, ...testCases] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);



const max = Math.max(...testCases);
const dp = [0, 1, 2, 3, 4, 5];


let added = 1;
for (let i = dp.length; i <= max; i++) {
    let tail = 0;
    if (i % 6 === 0) {
        tail = 1;
    }

    if (i % 6 === 2) {
        added++;
    }

    dp[i] = dp[i - 1] + added + tail;
}


const answer = testCases.map(elem => dp[elem]).join('\n');
console.log(answer);
