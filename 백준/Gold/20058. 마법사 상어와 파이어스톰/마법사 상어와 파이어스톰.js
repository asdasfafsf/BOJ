const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());


let index = 0;
const [N, Q] = input[index].split(' ').map(Number);

const board = [];
for (let i = 1; i < input.length - 1; i++) {
    board.push(input[++index].split(' ').map(Number));
}
const L = input[++index].split(' ').map(Number);

const dp = [[-1, 0], [1, 0], [0, -1], [0, 1]];


let newBoard = board;

for (let l = 0; l < L.length; l++) {
    const lValue = L[l];
    // console.log(`\nlValue : ${lValue}\n`)

    const currentBoard = newBoard;
    const targetBoard = newBoard.map(elem => elem.map(elemElem => elemElem));

    // 격자기준 시계방향으로 회전

    const lPow = Math.pow(2, lValue);
    const nPow = Math.pow(2, N);
    for (let sy = 0; sy < nPow; sy += lPow) {
        const ty = sy + lPow;
        for (let sx = 0; sx < nPow; sx += lPow) {
            const tx =  sx + lPow;

            // console.log('--------');
            for (let x = 0; x < lPow; x++) {
                for (let y = 0; y < lPow; y++) {
                    // console.log(sx + lPow - x - 1)
                    const destY = sy + y;
                    const destX = sx + lPow - x - 1;

                    const startX = sx + y;
                    const startY = sy + x;

                    // console.log(`startY : ${startY}  startX : ${startX}`);
                    // console.log(`destY : ${destY}  destX : ${destX}`);
                    targetBoard[sy + y][sx + lPow - x - 1] = currentBoard[sy + x][sx + y]
                }
            }

            // console.log('--------')
        }
    }

    // console.log(currentBoard.map(elem => elem.join(' ')).join('\n'))
    // console.log(currentBoard.map(elem => elem.map(ee => (ee + '').padEnd(2, ' ')).join(' ')).join('\n'))

    // console.log()
    // console.log(targetBoard.map(elem => elem.map(ee => (ee + '').padEnd(2, ' ')).join(' ')).join('\n'))

    const queue = [];

    for (let y = 0; y < targetBoard.length; y++) {
        for (let x = 0; x < targetBoard[y].length; x++) {
            if (targetBoard[y][x] === 0) {
                continue;
            }

            let count = 0;
            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + y, dx + x];

                if (ny < 0 || ny >= targetBoard.length || nx < 0 || nx >= targetBoard.length) {
                    continue;
                }

                if (targetBoard[ny][nx] > 0) {
                    count++;
                }
            }

            if (count < 3) {
                queue.push([y, x]);
            }
        }
    }

    for (const [y, x] of queue) {
        targetBoard[y][x]--;
    }


    newBoard = targetBoard;
    // console.log()
    // console.log(targetBoard.map(elem => elem.map(ee => (ee + '').padEnd(2, ' ')).join(' ')).join('\n'))
}

const resultBoard = newBoard;
const visited = Array.from(Array(resultBoard.length), () => Array(resultBoard[0].length).fill(false));

let max = 0;

for (let y = 0 ; y < resultBoard.length; y++) {
    for (let x = 0; x < resultBoard[y].length; x++) {
        if (visited[y][x] === true || resultBoard[y][x] === 0) {
            continue;
        }
        visited[y][x] = true;

        const queue = [[y, x]];
        let current = 0;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];
            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny < 0 || ny >= resultBoard.length || nx < 0 || nx >= resultBoard.length || visited[ny][nx] === true || resultBoard[ny][nx] === 0) {
                    continue;
                }

                visited[ny][nx] = true;
                queue.push([ny, nx]);
            }
            current++
        }

        max = Math.max(queue.length, max);
    }
}


console.log(resultBoard.flat().reduce((pv, cv) => pv + cv, 0))
console.log(max)

