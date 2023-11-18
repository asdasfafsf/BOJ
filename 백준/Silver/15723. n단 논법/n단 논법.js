
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const n = +input[0];
let index = 0;
const visited = Array.from({length: 26}, () => Array.from({length: 26}, () => 0));

for (let i = 0; i < n; i++) {
    const [start, end] = input[++index]
        .split(' is ')
        .map(elem => elem.charCodeAt(0) - 'a'.charCodeAt(0));

    visited[start][end] = 1;
}

for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
        for (let k = 0; k < 26; k++) {
            visited[j][k] |= (visited[j][i] && visited[i][k])
        }
    }
}

const m = +input[++index];

for (let i = 0; i < m; i++) {
    const [start, end] = input[++index]
        .split(' is ')
        .map(elem => elem.charCodeAt(0) - 'a'.charCodeAt(0));

    if (visited[start][end]) {
        console.log('T');
    } else {
        console.log('F')
    }
}
