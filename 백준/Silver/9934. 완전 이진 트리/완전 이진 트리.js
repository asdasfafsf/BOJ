const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const K = +input[0];
const arr = input[1].split(' ').map(Number);
const answer = Array.from({length: K}, () => []);



const recursion = (start, end, depth) => {
    if (depth === K) {
        return;
    }
    const root = (start + end) >> 1;
    answer[depth].push(arr[root]);

    recursion(start, root - 1, depth + 1);
    recursion(root + 1, end, depth + 1);
}

recursion(0, arr.length - 1, 0);

console.log(answer.map(elem => elem.join(' ')).join('\n'))