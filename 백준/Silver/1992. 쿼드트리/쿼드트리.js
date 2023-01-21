const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const num = +input.slice(0, 1);
const list = input.slice(1).map(e => [...e]);

const recursion = (num, input, x, y) => {
    let prev = input[y][x];

    for (let i = y; i < y + num; i++) {
        for (let j = x; j < x + num; j++) {
            const cur = input[i][j];

            if (prev != cur) {
                return '('
                    + recursion(num / 2, input, x, y)
                    + recursion(num / 2, input, x + num / 2, y)
                    + recursion(num / 2, input, x, y + num / 2)
                    + recursion(num / 2, input, x + num / 2, y + num / 2)
                    + ')'
            }
        }
    }

    return prev;
}


console.log(recursion(num, list, 0, 0));

