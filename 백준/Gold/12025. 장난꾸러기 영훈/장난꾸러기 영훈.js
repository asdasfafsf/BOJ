const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .split('\n');

let str = input[0];
let N = BigInt(input[1]);
let M = BigInt(1);

for (let i = 0; i < str.length; i++) {
    if (str[i] === '1' || str[i] === '6') {
        str = str.substring(0, i) + '1' + str.substring(i + 1);
        M *= BigInt(2);
    } else if (str[i] === '2' || str[i] === '7') {
        str = str.substring(0, i) + '2' + str.substring(i + 1);
        M *= BigInt(2);
    }
}

if (N > M || N < BigInt(0)) {
    console.log(-1);
} else {
    N -= BigInt(1);
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '1') {
            if (N % BigInt(2)) {
                str = str.substring(0, i) + '6' + str.substring(i + 1);
            }
            N = N / BigInt(2);
        } else if (str[i] === '2') {
            if (N % BigInt(2)) {
                str = str.substring(0, i) + '7' + str.substring(i + 1);
            }
            N = N / BigInt(2);
        }
    }
    console.log(str);
}