const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim();

const N = +input;

if (N > 20) {
    let n = N;
    let answer = 2n;
    while(--n) {
        answer *= 2n;
    }
    answer -= 1n;
    console.log(answer.toString())
} else {
    
    const answer = [];

    const hanoi = (n, start, end) => {
        if (n === 1) {
            answer.push(`${start} ${end}`);
            return;
        }

        hanoi(n - 1, start, 6 - (start + end));
        hanoi(1, start, end);
        hanoi(n - 1, 6 - (start + end), end);
    }

    hanoi(N, 1, 3);
    console.log(Math.pow(2, N) - 1);
    console.log(answer.join('\n'));
}

