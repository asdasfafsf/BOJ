const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const arr = input[1].split(' ').map(Number);
const sum = arr.reduce((a, b) => a + b, 0);
if (sum > 0) console.log('Right');
else if (sum < 0) console.log('Left');
else console.log('Stay');