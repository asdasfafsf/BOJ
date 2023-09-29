
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               

const N = +input.at(0);
const arr = input.slice(1)
    .map(elem => elem.split(''));

const graph = Array.from({length: N + 2})
                    .map(elem => new Array(N + 2).fill(0));

arr.forEach((elem, index) => {
    elem.forEach((elemElem, jndex) => {
        if (elemElem === '1') {
            graph[+index + 1][+jndex + 1] = 1
        }
    })
})


const visited = Array.from({length: N + 2})
                    .map(elem => new Array(N + 2).fill(false));


const answer = [];
let count = 0;

const dfs = (y, x) => {
    if (visited[y][x] === false && graph[y][x] === 1) {
        visited[y][x] = true;
        count++;
    } else {
        return;
    }


    dfs(y + 1, x);
    dfs(y, x + 1);
    dfs(y - 1, x);
    dfs(y, x - 1);
}


for (let i = 1; i < graph.length - 1; i++) {
    for (let j = 1; j < graph[i].length - 1; j++) {
        if (visited[i][j] === false && graph[i][j] === 1) {
            dfs(i, j)
            answer.push(count);
            count = 0;
        }
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n').trim())