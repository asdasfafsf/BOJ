const [X, Y] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


let left = 0;
let right = 1_000_000_000;
const Z = Math.floor((Y * 100) / X);
let answer = -1;


if (Z < 99) {
    while (left <= right) {
        const mid = (left + right) >> 1;
        const currentZ = Math.floor(((Y + mid) * 100) / (X + mid));

        if (Z == currentZ) {
            left = mid + 1;
        } else {
            answer = mid;
            right = mid - 1;
        }
    }
}

console.log(answer);