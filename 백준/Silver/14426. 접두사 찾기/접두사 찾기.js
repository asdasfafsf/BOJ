class Node {
    constructor() {
        this.children = {};
    }
}



const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let index = 0;

const map = {};

for (let i = 0; i < N; i++) {
    const str = input[++index];
    const cur = str.charAt(0);

    if (!map[cur]) {
        map[cur] = {};
    }
    let currentNode = map[cur];
    for (let c = 1; c < str.length; c++) {
        const cc = str.charAt(c);
    
        if (!currentNode[cc]) {
            currentNode[cc] = {};
        }

        currentNode = currentNode[cc];
    }
}

let answer = 0;
for (let i = N + 1; i <= M + N; i++) {
    const str = input[i];
    let currentNode = map;
    let count = 0;

    for (let c = 0; c < str.length; c++) {
        if (currentNode[str.charAt(c)]) {
            currentNode = currentNode[str.charAt(c)];
            count++;
        } else {
            break;
        }
    } 

    if (count === str.length) {
        answer++;
    }
}

console.log(answer)