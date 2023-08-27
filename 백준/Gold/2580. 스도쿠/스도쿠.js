const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(Number))



const board = input;

const zeroList = [];
let index = 0;
board.forEach( (elem, x) => {
    elem.forEach((elemElem, y) => {
        if (elemElem === 0) {
            zeroList.push(index);
        }
        index++;
    })
})


let res = '';

const validate = (current) => {
    const currentValue = zeroList[current];
    const x = currentValue % 9;
    const y = Math.floor(currentValue / 9);

    const value = board[y][x];

    for (let i = 0; i < 9; i++) {
        if (x != i && value === board[y][i]) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (y != i && value === board[i][x]) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        const ty = (y - (y % 3)) + Math.floor(i / 3)
        const tx = (x - (x % 3)) + (i % 3)
        const tValue = board[ty][tx];

        if ((tx != x || ty != y) && value === tValue) {
            return false;
        }
    }

    return true;
}


const recursion = (current) => {
    if (current === zeroList.length) {
        const res = board.map(elem => {
            return elem.join(' ').trim()
        }).join('\n').trim();
        
        console.log(res);
        process.exit();
    }

    const currnetValue = zeroList[current];

    for (let i = 1; i < 10; i++) {
        const x = currnetValue % 9;
        const y = Math.floor(currnetValue / 9);

        board[y][x] = i;
        if (validate(current)) {
            recursion(current + 1);
        }
        board[y][x] = 0;
    }
}

recursion(0);
