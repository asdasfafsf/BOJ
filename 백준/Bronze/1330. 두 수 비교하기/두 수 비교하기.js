const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
const [N, M] = input.split(' ').map(Number);

if (N > M){
    console.log('>')
} else if (N < M) {
    console.log('<')
} else {
    console.log('==')
}