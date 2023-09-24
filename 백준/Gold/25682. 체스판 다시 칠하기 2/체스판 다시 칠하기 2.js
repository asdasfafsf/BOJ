const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const arr = input.slice(1)
                .map(elem => elem.trim().split(''));


const white = Array.from({length: N + 1})
                .map(elem => new Array(M + 1).fill(0));
const black = Array.from({length: N + 1})
                 .map(elem => new Array(M + 1).fill(0));


let prev = arr[0][0];
white[1][1] = prev === 'B' ? 1 : 0;
black[1][1] = white[1][1] ^ 1;



for (let i = 1; i < N * M; i++) {
    const y = (Math.floor(i / M)) + 1;
    const x = (i % M) + 1;

    white[y][x] = (white[y - 1][x] + white[y][x - 1] - white[y - 1][x - 1])
    black[y][x] = (black[y - 1][x] + black[y][x - 1] - black[y - 1][x - 1])

    let cur = arr[y - 1][x - 1];


    if (x === 1) {
        if (cur === arr[y - 2][x - 1]) {
            white[y][x]++;
            prev = cur === 'B' ? 'W' : 'B';
            arr[y - 1][x - 1] = prev;
        } else {
            black[y][x]++;
            prev = cur;
        }
    } else {
        if (cur === prev) {
            white[y][x]++;
            prev = cur === 'B' ? 'W' : 'B';
        } else {
            black[y][x]++;
            prev = cur;
        }
    }
}

let min = Number.MAX_SAFE_INTEGER;

for (let r = 0; r <= N - K; r++) {
    for (let c = 0; c <= M - K; c++) {
        const sr = r + 1;
        const sc = c + 1;

        const er = r + K;
        const ec = c + K;


        const wm = white[er][ec] - (white[er][sc - 1] + white[sr - 1][ec] - white[sr - 1][sc - 1])
        const bm = black[er][ec] - (black[er][sc - 1] + black[sr - 1][ec] - black[sr - 1][sc - 1])
   
        min = Math.min(wm, bm, min);
    }
}

console.log(min);