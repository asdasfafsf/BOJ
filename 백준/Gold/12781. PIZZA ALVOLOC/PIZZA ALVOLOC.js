const [x1, y1, x2, y2, x3, y3, x4, y4] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let result = 1;

let a = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
let b = (x2 - x1) * (y4 - y1) - (x4 - x1) * (y2 - y1);

if (!(a < 0 && b > 0) && !(a > 0 && b < 0)) {
    result = 0;
}

let c = (x3 - x4) * (y1 - y4) - (x1 - x4) * (y3 - y4);
let d = (x3 - x4) * (y2 - y4) - (x2 - x4) * (y3 - y4);

if (!(c < 0 && d > 0) && !(c > 0 && d < 0)) {
    result = 0;
}

console.log(result);