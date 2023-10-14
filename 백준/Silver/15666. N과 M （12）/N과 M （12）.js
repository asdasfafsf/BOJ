
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

const ans = new Set();
const recursion = (depth, answer) => {
    if (depth === M) {
        ans.add(answer.join(' ').trim())
        return;
    }

    let last = answer[depth - 1] ?? 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= last) {
            last = arr[i];
            answer.push(last);
            recursion(depth + 1, answer);
            answer.pop();
        }
    }
}

recursion(0, [])
console.log([...ans].join('\n'))