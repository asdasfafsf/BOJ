
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')




const [R, C, K] = input[0].split(' ').map(Number);
const map = input.slice(1).map(elem => elem.split(''));


const visited = Array.from(Array(R), () => Array(C).fill(false));
let answer = 0;

const recursion = (y, x, n) => {
    if (n === K) {
        if (y === 0 && x === C - 1) {
            answer++;
        }

        return;
    }

    for (const [dy, dx] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
        const [ny, nx] = [dy + y, dx + x];

        if (ny < 0 || ny >= R || nx >= C || nx < 0 || visited[ny][nx] === true || map[ny][nx] === 'T') {
            continue;
        }

        visited[ny][nx] = true;
        recursion(ny, nx, n + 1);
        visited[ny][nx] = false;
    }
}


visited[R - 1][0] = true;
recursion(R - 1, 0, 1);
console.log(answer)