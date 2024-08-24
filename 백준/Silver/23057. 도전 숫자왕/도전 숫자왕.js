const [[N], nums] = require('fs')
    .readFileSync(process.platform === 'linux' ?  0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))



const M = nums.reduce((pv, cv) => pv + cv, 1);
const visited = Array(N).fill(false);
const sums = new Set();


let answer = M;
const recursion = (depth, start, value) => {
    if (!sums.has(value)) {
        sums.add(value);
        answer--;
    }

    for (let i = start; i < nums.length; i++) {
        if (visited[i]) {
            continue;
        }

        visited[i] = true
        recursion(depth + 1, i + 1, nums[i] + value);
        visited[i] = false;
    }
}

recursion(0, 0, 0);

console.log(answer)