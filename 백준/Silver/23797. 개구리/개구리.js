const str = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()

let answer = 0;

let k = 0;
let p = 0;
for (let i = 0; i < str.length; i++) {
    const cur = str.charAt(i);

    if (cur === 'K') {
        k++;
        if (p) {
            p--;
        }
    } else {
        p++
        if (k) {
            k--
        }
    }
    answer = Math.max(answer, k, p);
}

console.log(answer)