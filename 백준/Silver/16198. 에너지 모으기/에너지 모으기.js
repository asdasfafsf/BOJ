const [N, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(/\s/)
    .map(Number);


let answer = 0;

const recursion = (depth, arr, value) => {
    if (depth === N - 2) {
        answer = Math.max(value, answer);
    }

    for (let i = 1; i < arr.length - 1; i++) {
        recursion(depth + 1, arr.slice(0, i).concat(arr.slice(i + 1)), arr[i - 1] * arr[i + 1] + value)
    }
}


recursion(0, arr, 0);
console.log(answer)