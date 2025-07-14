const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim();

const map = {
    M: 'MatKor',
    W: 'WiCys',
    C: 'CyKor',
    A: 'AlKor',
    '$': '$clear'
};

console.log(map[input]);