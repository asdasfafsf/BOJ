
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');



for (let i = 1; i < input.length; i+=3) {
    const n = +input[i];

    const arr = [];
    arr.push(input[i + 1].split(' ').map(Number));
    arr.push(input[i + 2].split(' ').map(Number));

    arr[0][1] = arr[1][0] + arr[0][1];
    arr[1][1] = arr[0][0] + arr[1][1];

    for (let j = 2; j < n; j++) {
        arr[0][j] = Math.max(arr[1][j - 1], arr[1][j - 2]) + arr[0][j]
        arr[1][j] = Math.max(arr[0][j - 1], arr[0][j - 2]) + arr[1][j]
    }

    console.log(Math.max(arr[0][n - 1], arr[1][n - 1]));
}