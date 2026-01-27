const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .filter(v => v.length)
    .map(Number);

let sum = 0;
for (let i = 0; i < 9; i++) sum += input[i];

let a = -1, b = -1;
for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (sum - input[i] - input[j] === 100) {
            a = i; b = j;
            i = 9;
            break;
        }
    }
}

const ans = [];
for (let i = 0; i < 9; i++) {
    if (i === a || i === b) continue;
    ans.push(input[i]);
}

ans.sort((x, y) => x - y);
console.log(ans.join('\n'));