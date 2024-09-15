const [[N], ...T] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const map = {};


for (const [em, xm] of T) {
    if (!map[em]) {
        map[em] = 0;
    }

    if (!map[xm]) {
        map[xm] = 0;
    }

    map[em]++;
    map[xm]--;
}


const times = Object.keys(map)
    .map(Number)
    .sort((a, b) => a - b);


let answer = 0;
let count = 0;
let em = 0;
let xm = 0;

let isOk = false;
for (const time of times) {
    count += map[time];

    if (count > answer) {
        answer = count;
        em = time;
        isOk = true;
    } else if (count < answer && isOk) {
        xm = time;
        isOk = false;
    }
}

if (isOk) {
    xm = times.at(-1);
}

console.log(answer);
console.log(`${em} ${xm}`)