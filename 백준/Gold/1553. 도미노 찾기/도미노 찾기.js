const board = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split('').map(Number));

const used = Array.from({ length: 7 }, () => Array(7).fill(false));
const visited = Array.from({ length: 8 }, () => Array(7).fill(false));


const recursion = (y, x) => {
    if (y === 8) {
        return 1;
    }

    let count = 0;
    let ny = y;
    let nx = x + 1;

    if (nx === 7) {
        ny = y + 1;
        nx = 0;
    }

    if (visited[y][x]) {
        return recursion(ny, nx);
    }

    const current = board[y][x];
    visited[y][x] = true;

    for (const [dy, dx] of [[0, 1], [1, 0]]) {
        const newY = y + dy;
        const newX = x + dx;

        if (isOk(newY, newX)) {
            const next = board[newY][newX];

            if (!used[current][next] && !visited[newY][newX]) {
                used[current][next] = used[next][current] = true;
                visited[newY][newX] = true;
                count += recursion(ny, nx);
                visited[newY][newX] = false;
                used[current][next] = used[next][current] = false;
            }
        }
    }

    visited[y][x] = false;
    return count;
}
const isOk = (y, x) => y < 8 && x < 7
console.log(recursion(0, 0))