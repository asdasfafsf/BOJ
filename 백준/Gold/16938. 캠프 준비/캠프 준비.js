const [[N, L, R, X], A] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



let answer = 0;
const recursion = (depth, start, min, max, value) => {
    if (value > R) {
        return;
    }

    if (depth >= 2) {
        if (max - min >= X && value >= L && value <= R) {
            answer++;
        }
    }

    if (depth === N) {
        return;
    }


    for (let i = start; i < A.length; i++) {
        const difficulty = A[i];
        const sum = value + difficulty;

        recursion(
            depth + 1, 
            i + 1, 
            Math.min(min, difficulty), 
            Math.max(max, difficulty), 
            sum
        );
        
    }

}

recursion(0, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0);
console.log(answer)