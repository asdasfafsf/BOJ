const [W, H] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(' ')
    .map(Number);

const area = 0.5 * W * H;

console.log(area.toFixed(1));