const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')

const T = +input[0];
const dx = [-2, -1, 1, 2, 2, 1, -1, -2]
const dy = [1, 2, 2, 1, -1, -2, -2, -1]

for (let t = 0; t < T; t++) {
    const arr = input.slice(t * 3 + 1, t * 3 + 1 + 3);
    const L = +arr.at(0);
    const [knight, target] = arr.slice(1).map(elem => elem.split(' ').map(Number))
    

    const visited = Array.from({length: L + 1})
        .map(elem => new Array(L + 1).fill(0));

    const queue = [];
    const [kx, ky] = knight
    const [tx, ty] = target;
    visited[kx][ky] = 1;
    queue.push([kx, ky])
    
    while(queue.length) {
        const [x, y] = queue.shift();

        if (tx === x && ty === y) {
            break;
        }

        for (let i = 0; i < 8; i++) {
            const xx = x + dx[i];
            const yy = y + dy[i];

            if (xx > -1 && yy > -1 && yy < L && xx < L && visited[xx][yy] === 0) {
                queue.push([xx, yy]);
                visited[xx][yy] = visited[x][y] + 1;
            }
        }
    }

    console.log(visited[tx][ty] - 1)

}

