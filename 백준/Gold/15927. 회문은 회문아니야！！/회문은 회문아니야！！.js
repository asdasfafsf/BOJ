const input = require('fs')
    .readFileSync(0, 'utf8')
    .toString()
    .trim();

let isPar = true;

let left = 0;
let right = input.length - 1;

while (left <= right) {
    if (input[left] !== input[right]) {
        isPar = false;
    }

    left++;
    right--;
}
if (new Set(input.split('')).size === 1) {
    console.log(-1)
} else if (isPar) {
    console.log(input.length - 1);
} else {
    console.log(input.length);
}