const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = parseInt(input[0]);

let found = false;

// N이 1~9면 B(또는 A)로 등장
if (N >= 1 && N <= 9) {
    found = true;
}

// N이 C로 등장하는지 확인 (2×1 ~ 9×9)
for (let a = 2; a <= 9 && !found; a++) {
    for (let b = 1; b <= 9; b++) {
        if (a * b === N) {
            found = true;
            break;
        }
    }
}

console.log(found ? 1 : 0);