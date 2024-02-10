const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


let index = 0;
let T = +input[index];
let count = 0;
let no = 0;


const recursion = (current, arr, visited, finished) => {
    visited[current] = no++;
    const next = arr[current];

    if (visited[next] === -1) {
        recursion(next, arr, visited, finished);
    } else if (!finished[next]) {
        count += visited[current] - visited[next] + 1;
    }

    finished[current] = true;
}
const answer = [];
while((T--)) {
    count = 0;
    no = 0;
    const n = +input[++index];
    const arr = [0, ...input[++index].split(' ').map(Number)];
    
    const visited = Array.from({length: n + 1}, () => -1);
    const finished = Array.from({length: n + 1}, () => false);
    for (let i = 1; i < arr.length; i++) {
        if (!finished[i]) {
            recursion(i, arr, visited, finished);
        }
    }

    answer.push(n - count);
}

console.log(answer.join('\n'));

