const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [n, m] = input[0].split(' ').map(Number);
const nums = input[1]?.split(' ').map(Number) ?? [];

let answer = 0;
const visited = Array(10).fill(0);
const recursion = (depth, value) => {
    if (depth === n) {
        let isOk = true;
        for (const num of nums) {
            if (visited[num] === 0) {
                isOk = false;
                break;
            }
        }

        if (isOk) {
            answer++;
        }
        return;
    }

    for (let i = 0; i < 10; i++) {
        visited[i]++;
        recursion(depth + 1, value + i)
        visited[i]--;
    }
}

recursion(0, '');

console.log(answer)