const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [R, C, N] = input[0]
    .split(' ')
    .map(Number);

const arr = input
    .slice(1)
    .map(elem => elem.split(''));

const counts = arr.map(elem => {
    return elem.map(elemElem => {
        if (elemElem === 'O') {
            return 2;
        }

        return 0;
    })
})


const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]]

for (let i = 1; i < N; i++) {


    for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
            const elem = arr[y][x];
            
            if (i % 2 === 0) {
                if (elem === 'O') {
                    counts[y][x]--;

                    if (counts[y][x] === 0) {
                        for (const [dy, dx] of dp) {
                            const [ty, tx] = [dy + y, dx + x];

                            if (ty > -1 && ty < R && tx > -1 && tx < C) {
                                if (arr[ty][tx] === 'O' && counts[ty][tx] === 1) {

                                } else {
                                    arr[ty][tx] = '.';
                                }
                            }
                        }
                        arr[y][x] = '.';
                        counts[y][x] = 0;
                    }
                }
            } else {
                if (elem === '.') {
                    counts[y][x] = 3;
                    arr[y][x] = 'O';
                } else {
                    counts[y][x]--;
                }
            }
        }
    }
}

console.log(arr.map(elem => elem.join('')).join('\n'))