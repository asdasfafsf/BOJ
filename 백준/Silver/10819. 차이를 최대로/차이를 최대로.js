const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n')
                .map(elem => elem.split(' ').map(Number));



const [N] = input[0];
const arr = input[1];
const visitedList = new Array(N).fill(false);

let max = Number.MIN_SAFE_INTEGER;

const recursion = (current) => {
    if (current === N) {
        let sum = 0;
        for (let i = 0; i < visitedList.length - 1; i++) {
            sum += Math.abs(arr[visitedList[i]] - arr[visitedList[i + 1]]);
        }
        max = Math.max(sum, max);
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visitedList.includes(i)) {
            visitedList[current] = i;
            recursion(current + 1);
            visitedList[current] = false;
        }
    }
}


recursion(0);

console.log(max);