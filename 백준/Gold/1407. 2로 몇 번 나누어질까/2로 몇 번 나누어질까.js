const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);



const F = (num) => {
    let res = 0n;
    let tmp = 1n;
    while (num != 0n) {
        if (num % 2n !== 0n) {
            res += ((num / 2n) + 1n) * tmp;
        } else {
            res += (num / 2n) * tmp;
        }
        num /= 2n;
        tmp *= 2n;
    }

    return res;
}

console.log((F(B) - F(A - 1n)).toString())
