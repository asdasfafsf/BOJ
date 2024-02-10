const [input, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(''));


const [N, M] = input.join('').split(' ').map(Number);


const dMap = {
    'U': [-1, 0],
    'L': [0, -1],
    'R': [0, 1],
    'D': [1, 0]
};

const visit = Array.from({length: N}, () => Array.from({length: M}, () => -1));
const finish = Array.from({length: N}, () => Array.from({length: M}, () => false));

let answer = 0;

const recursion = (y, x) => {
    visit[y][x] = 1;
    const [dy, dx] = dMap[arr[y][x]];
    const [ny, nx] = [y + dy, x + dx];


    if (visit[ny][nx] === -1) {
        recursion(ny, nx);
    } else if (visit[ny][nx] === 1) {
        answer++;
    }
    visit[y][x] = 2;
    finish[y][x] = true;
}


for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (finish[y][x] === false) {
            recursion(y, x);
        }
    }
}

console.log(answer)