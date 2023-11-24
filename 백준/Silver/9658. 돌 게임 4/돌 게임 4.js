const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()


let N = +input;


if (N % 7 === 1 || N % 7 === 3) {
    console.log('CY');
} else {
    console.log('SK');
}