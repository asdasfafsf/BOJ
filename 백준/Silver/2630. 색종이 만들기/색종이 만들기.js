const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

const num = +input.split('\n').slice(0, 1);
const list = input.split('\n').slice(1).map(e => e.trim().split(' '));


let blue = 0;
let white = 0;


const recursion = (num, input, x, y) => {
    let shouldSlice = false;
    let prev = input[y][x];

    for (let i = y; i < y + num; i++) {
        for (let j = x; j < x + num; j++) {
            const cur = input[i][j];

            if (prev != cur) {
                shouldSlice = true;
                break;
            }
        }
    }

    if (shouldSlice) {
        recursion(num / 2, input, x, y);
        recursion(num / 2, input, x + num / 2, y);
        recursion(num / 2, input, x, y + num / 2);
        recursion(num / 2, input, x + num / 2, y + num / 2);
    } else {
        if (prev === '0') {
            blue++;
        } else {
            white++;
        }  
    }
}


recursion(num, list, 0, 0);

console.log(blue);
console.log(white);
