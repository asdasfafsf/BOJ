const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();


let left = 0;
let right = input.length - 1;
let answer = 1;

while (left <= right) {
    if (input.charAt(left) !== input.charAt(right)) {
        answer = 0;
        break;
    }

    left++;
    right--;
}

console.log(answer);