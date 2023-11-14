const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const [X, Y] = input[0].split(' ').map(Number);
const N = +input[1];


const [sl, sp] = input.at(-1).split(' ').map(Number);

const NORTH = 1;
const SOUTH = 2;
const EAST = 4;
const WEST = 3;

const strs = ['', 'NORTH', 'SOUTH', 'WEST', 'EAST'];

let answer = 0;
for (let i = 2; i < input.length - 1; i++) {
    const [tl, tp] = input[i].split(' ').map(Number);


    const [l1, p1] = sl < tl ? [sl, sp] : [tl, tp];
    const [l2, p2] = sl < tl ? [tl, tp] : [sl, sp];

    // console.log(strs[l1], strs[l2])

    if (sl === tl) {
        answer += Math.abs(sp - tp);
    } else if (l1 === NORTH && l2 === EAST) {
        // console.log(X - p1 + p2)
        answer += X - p1 + p2;
    } else if (l1 === NORTH && l2 === WEST) {
        // console.log(p1 + p2)
        answer += p1 + p2;
    } else if (l1 === NORTH && l2 === SOUTH) {
        // console.log(X - p1 + X - p2 + Y);
        // console.log(p1 + p2 + Y);
        answer += Math.min(
            X - p1 + X - p2 + Y,
            p1 + p2 + Y
        )
    } else if (l1 === SOUTH && l2 === WEST) {
        // console.log(p1 + Y - p2)
        answer += p1 + Y - p2
    } else if (l1 === SOUTH && l2 === EAST) {
        // console.log(X - p1 + Y - p2)
        answer += X - p1 + Y - p2
    } else if (l1 === WEST && l2 === EAST) {
        // console.log(p1 + X + p2)
        // console.log(Y - p1 + X + Y - p2)
        answer += Math.min(
            p1 + X + p2,
            Y - p1 + X + Y - p2
        )
    }

}


console.log(answer)