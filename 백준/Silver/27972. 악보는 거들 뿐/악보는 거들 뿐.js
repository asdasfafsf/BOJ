const [[M], p] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


let answer = 1;

let inc = 1;
let dec = 1;
for (let i = 0; i < M - 1; i++) {
    const cur = p[i];
    const next = p[i + 1];

    if (cur > next) {
        inc = 1;
        dec++;
        answer = Math.max(answer, dec);
    } else if (cur < next) {
        dec = 1;
        inc++;
        answer = Math.max(answer, inc);
    }
}

console.log(answer)