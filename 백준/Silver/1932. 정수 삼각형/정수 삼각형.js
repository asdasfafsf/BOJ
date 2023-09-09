const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n');

const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const cache = arr.map(elem => new Array(elem.length).fill(false));


for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
        const value = arr[i][j]
        const left = arr[i + 1][j];
        const right = arr[i + 1][j + 1];

        arr[i][j] = value + Math.max(left, right);
    }
}


console.log(arr[0][0]);