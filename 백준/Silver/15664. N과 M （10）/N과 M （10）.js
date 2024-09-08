const [[N, M], nums] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))
 




const answer = [];
const current = [];
const visited = Array(N).fill(false);
nums.sort((a, b) => a - b);
const recursion = (start, depth) => {
    if (depth === M) {
        answer.push(current.join(' '));
        return;
    }

    for (let i = start; i < nums.length; i++) {
        if (visited[i] === false) {
            current.push(nums[i]); 
            visited[i] = true;
            recursion(i + 1, depth + 1);
            visited[i] = false;
            current.pop();
        }
    }
}


for (let i = 0; i < nums.length; i++) {
    visited[i] = true;
    current.push(nums[i])
    recursion(i, 1)
    current.pop();
    visited[i] = false;
}

console.log([...new Set(answer)].join('\n'))