const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const K = +input.at(-1);
const counts = {};

for (let i = 1; i < input.length - 1; i++) {
    if (!counts[input[i]]) {
        counts[input[i]] = {
            count: 0,
            zero: input[i]
                .split('')
                .reduce((pv, cv) => pv + ((cv == 0) ? 1 : 0), 0)
        }
    }
    counts[input[i]].count++;
}

let answer = 0;

for (const key of Object.keys(counts)) {
    const data = counts[key];
    const { count, zero } = data;

    if (zero <= K && (K - zero) % 2 === 0) {
        answer = Math.max(answer, count);
    }

}

console.log(answer)