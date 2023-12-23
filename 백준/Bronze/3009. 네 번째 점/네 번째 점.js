const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const xList = input.map(elem => elem[0]);
const yList = input.map(elem => elem[1]);


const minX = Math.min(...xList);
const maxX = Math.max(...xList);
const minY = Math.min(...yList);
const maxY = Math.max(...yList);

const lists = [
    [minX, minY],
    [minX, maxY],
    [maxX, minY],
    [maxX, maxY],
].filter(([x, y]) => (!input.some(([x2, y2]) => x2 === x && y2 === y)))[0];

console.log(lists.join(' '));