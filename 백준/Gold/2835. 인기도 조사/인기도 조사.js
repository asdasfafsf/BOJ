const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const toNumber = time => {
    const [h, m, s] = time.trim().split(':').map(Number);
    return h * 3600 + m * 60 + s;
}

let index = 0;

const len = +input[index];
const startViewers = Array(86402).fill(0); 
const endViewers = Array(86402).fill(0);

for (let i = 0; i < len; i++) {
    let [s, e] = input[++index]
        .split('-')
        .map(toNumber);

    startViewers[s]++;
    endViewers[Math.min(e + 1, 86401)]++;

    if (s > e) {
        startViewers[0]++;
    }
}

const viewers = [0];
for (let i = 1; i <= 86400; i++) {
    const sum = viewers[i - 1] + startViewers[i - 1] - endViewers[i - 1];
    viewers.push(sum);
}

for (let i = 1; i <= 86400; i++) {
    viewers[i] += viewers[i - 1];
}

const Q = +input[++index];
const answer = [];

for (let i = 0; i < Q; i++) {
    let [s, e] = input[++index]
        .split('-')
        .map(toNumber);

    let total, length;
    if (s <= e) {
        total = viewers[e + 1] - viewers[s];
        length = e - s + 1;
    } else {
        total = (viewers[86400] - viewers[s]) + (viewers[e + 1] - viewers[0]);
        length = (86400 - s) + (e + 1);
    }

    const popularity = (total / length).toFixed(10);
    answer.push(popularity);
}

console.log(answer.join('\n'));