const str = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()

let answer = 0;
let current = 1;

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'O') {
        answer = (answer + current) % 1_000_000_007;
    }

    current *= 2;
    current = (current % 1_000_000_007)
}

console.log(answer)