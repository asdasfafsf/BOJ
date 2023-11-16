
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const [n, w, L] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let answer = 0;
const bridge = [];

function Node(weight, point) {
    this.weight = weight;
    this.point = point;
}

while (arr.length || bridge.length) {
    bridge.forEach(elem => elem.point++);

    if (bridge.length && bridge.at(-1).point == w) {
        bridge.pop();
    }

    const sum = bridge.reduce((pv, cv) => pv + cv.weight, 0);

    if (arr.length 
        && arr.at(-1) + sum <= L 
        && bridge.length < w) {

        bridge.unshift(new Node(arr.pop(), 0))
    }
    answer++;
}

console.log(answer)
