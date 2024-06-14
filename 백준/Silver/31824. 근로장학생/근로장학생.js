
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .toString()
    .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = new Map();

let line = 1;
for (let i = 0; i < n; i++) {
    const [q, a] = input[line++].split(' ');
    map.set(q, a);
}

const answer = []
for (let i = 0; i < m; i++) {
    const s = input[line++];
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            const substr = s.substr(i, j + 1);
            if (!map.has(substr)) continue;

            ans += map.get(substr);
        }
    }

    answer.push(ans === '' ? '-1' : ans);
}

console.log(answer.join('\n'))