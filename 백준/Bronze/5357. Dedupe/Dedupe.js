const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
    const str = input[i];
    let result = str[0];
    for (let j = 1; j < str.length; j++) {
        if (str[j] !== str[j - 1]) result += str[j];
    }
    console.log(result);
}