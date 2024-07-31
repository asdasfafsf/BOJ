const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const [n, m] = input[0];
const sangsaList = input[1].map(elem => elem - 1);
const answer = sangsaList.map(elem => 0);
const graph  = Array.from(Array(n), () => [])


for (let i = 1; i < sangsaList.length; i++) {
    const sangsa = sangsaList[i];
    const buha = i;

    graph[sangsa].push([buha]);
}


for (let i = 2; i < m + 2; i++) {
    const [buha, score] = [input[i][0] - 1, input[i][1]];

    answer[buha] += score;
}

const queue = [[0, 0]];
let current = 0;

while (queue.length !== current) {
    const [node, _] =queue[current];

    for (const nextNode of graph[node]) {
        answer[nextNode] += answer[node];

        queue.push([nextNode, 0])
    }

    current++;
}


console.log(answer.join(' '))