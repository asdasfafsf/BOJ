const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim();

const arr = input.split('\n').map(elem => elem.split(' '));
const dp = [[1, 0], [0, -1], [-1, 0], [0, 1]]


const obj = {};
const recursion = (y, x, depth, value) => {
    if (depth === 6) {
        obj[value] = 1;
        return;
    }

    for (const [dy, dx] of dp) {
        const [ty, tx] = [y + dy, x + dx];

        if (ty > -1 && ty < 5 && tx > -1 && tx < 5) {
            recursion(ty, tx, depth + 1, value + arr[ty][tx]);
        }
    }
}


for (let i = 0; i < 25; i++) {
    const y = Math.floor(i / 5);
    const x = i % 5;
    recursion(y, x, 0, '');
}

console.log(Object.keys(obj).length);