const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const num = +input.slice(0, 1);
const list = input.slice(1).map(e => e.split(' ').map(Number));


const recursion = (num, input, x, y) => {
    if (num === 1) {
        return input[y][x];
    }

    return [
        recursion(num / 2, input, x, y),
        recursion(num / 2, input, x + num / 2, y),
        recursion(num / 2, input, x, y + num / 2),
        recursion(num / 2, input, x + num / 2, y + num / 2)]
        .sort((a, b) => a - b)
        .at(-2);
}


console.log(recursion(num, list, 0, 0));


