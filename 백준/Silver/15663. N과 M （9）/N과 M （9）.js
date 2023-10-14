
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const visited = Array.from({length: N}, () => false);


const ans = [];
const recursion = (depth, answer) => {
    if (depth === M) {
        ans.push(answer.join(' ').trim())
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (visited[i] === false) {
            visited[i] = true;
            answer.push(arr[i]);
            recursion(depth + 1, answer);
            answer.pop();
            visited[i] = false;
        }

    }
}

recursion(0, [])
console.log([...new Set(ans)].join('\n'))