const fs = require('fs')


const [N, ...arr] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i].replaceAll('G', 'R').split('');
    arr[i] = arr[i].split('');
}

const visited = Array.from({length: N}, () => Array.from({length: N}, ()=> false));
const visited2 = Array.from({length: N}, () => Array.from({length: N}, ()=> false));


const dfs = (y, x, arr, visited) => {
    if (y === N || x === N) {
        return;
    }
    const cur = arr[y][x];
    if (y > 0) {
        if (visited[y - 1][x] === false && arr[y - 1][x] === cur) {
            visited[y - 1][x] = true;
            dfs(y - 1, x, arr, visited)
        }
    }

    if (y < N - 1) {
        if (visited[y + 1][x] === false && arr[y + 1][x] === cur) {
            visited[y + 1][x] = true;
            dfs(y + 1, x, arr, visited)
        }
    }

    if (x > 0) {
        if (visited[y][x - 1] === false && arr[y][x - 1] === cur) {
            visited[y][x - 1] = true;
            dfs(y, x - 1, arr, visited)
        }
    }

    if (x < N - 1) {
        if (visited[y][x + 1] === false && arr[y][x + 1] === cur) {
            visited[y][x + 1] = true;
            dfs(y, x + 1, arr, visited)
        }
    }
}


let counter1 = 0;
let counter2 = 0;


for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (visited[i][j] === false) {
            counter1++;
            visited[i][j] = true;
            dfs(i, j, arr, visited);
        }

        if (visited2[i][j] === false) {
            counter2++;
            visited2[i][j] = true;
            dfs(i, j, arr2, visited2);
        }
    }
}

console.log(counter1, counter2);