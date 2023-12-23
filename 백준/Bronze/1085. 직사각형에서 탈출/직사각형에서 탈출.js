const [x, y, w, h] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


console.log(Math.min(
    (x - 0),
    (y - 0),
    Math.abs(x - w),
    Math.abs(y - h)
))