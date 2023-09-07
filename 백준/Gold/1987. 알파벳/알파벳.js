const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n');


const [R, C] = input[0].split(' ').map(Number);
const arr = input.slice(1)
                .map(elem => elem.split(''));


const possible = [...new Set(arr.join(',').split(','))];
const possibleLen = possible.length;
const map = new Map();


let max = 0;

const recursion = (current, y, x) => {
    map.set(arr[y][x], true);

    if (possibleLen >= current) {
        if (canVisit(y - 1, x)) {
            recursion(current + 1, y - 1, x);
        }
        if (canVisit(y + 1, x)) {
            recursion(current + 1, y + 1, x);
        }
        if (canVisit(y, x + 1)) {
            recursion(current + 1, y, x + 1);
        }
        if (canVisit(y, x - 1)) {
            recursion(current + 1, y, x - 1);
        }
    }

    max = Math.max(max, current + 1);
    map.set(arr[y][x], false);
}


const canVisit = (y, x) => {
    return arr[y] && arr[y][x] && !map.get(arr[y][x])
}



recursion(0, 0, 0);


console.log(max);
