const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(/\s+/)
    .map(Number);

let [a, b, c] = input;

[a, b, c] = [a, b, c].sort((x, y) => x - y);

let result = 0;

if (a === b && b === c) {
    result = 2;
} else if (a + b > c && a * a + b * b === c * c) {
    result = 1;
}

console.log(result);