const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n');

const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const cache = arr.map(elem => elem.map(elemElem => -1));


const recursion = (y, x) => {
    if (y === arr.length - 1) {
        return arr[y][x];
    }

    if (cache[y][x] === -1) {
        cache[y][x] = arr[y][x] + Math.max(recursion(y + 1, x), recursion(y + 1, x + 1));

    }

    return cache[y][x];
}

console.log(recursion(0, 0));
