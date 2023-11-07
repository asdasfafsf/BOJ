const arr = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


arr.forEach(([A, B]) => console.log(A + B))

