const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = Number(input[0]);
console.log("Gnomes:");
for (let i = 1; i <= N; i++) {
    const arr = input[i].split(' ').map(Number);
    if (
        (arr[0] < arr[1] && arr[1] < arr[2]) ||
        (arr[0] > arr[1] && arr[1] > arr[2])
    ) {
        console.log("Ordered");
    } else {
        console.log("Unordered");
    }
}