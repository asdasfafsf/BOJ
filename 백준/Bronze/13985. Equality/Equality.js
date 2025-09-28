const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[2]);
const c = parseInt(input[4]);

if (a + b === c) {
    console.log('YES');
} else {
    console.log('NO');
}