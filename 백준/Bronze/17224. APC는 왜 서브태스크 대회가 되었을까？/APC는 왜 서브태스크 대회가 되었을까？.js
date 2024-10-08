const [[N, L, K], ...questions] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const calc = ([sub1, sub2]) => {
    let res = 0;
    if (sub1 <= L) {
        res += 100;
    }

    if (sub2 <= L) {
        res = 140;
    }

    return res;
}

const scores = questions.map(calc).sort((a, b) => b - a);
const answer = scores.slice(0, K).reduce((pv, cv) => pv + cv, 0);
console.log(answer)