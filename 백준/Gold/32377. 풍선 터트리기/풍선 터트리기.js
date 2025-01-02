const [N, A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);


let left = 0n;
let right = 10000000000000000000n;

while (left <= right) {
    const mid = (left + right) / 2n;

    const an = mid / A;
    const bn = mid / B;
    const cn = mid / C;

    const s = an + bn + cn;

    if (s < N) {
        left = mid + 1n;
    } else {
        right = mid - 1n;
    }
}
left--;
let s = (left / A) + (left / B) + (left / C);
left++;


if (left % A === 0n) {
    s++;
    if (s === N) {
        console.log('A win');
        process.exit(0);
    }
} 

if (left % B === 0n) {
    s++;
    if (s === N) {
        console.log('B win');
        process.exit(0);
    }
}

console.log('C win');