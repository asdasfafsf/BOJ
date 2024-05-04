const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const map = {};
const used = {};
const answer = [];

for (let i = 1; i < input.length; i++) {
    let head = map;
    const str = input[i];

    let current = '';
    let len = 0;
    for (let s = 0; s < str.length; s++) {
        let cs = str.charAt(s);

        if (!head[cs]) {
            head[cs] = {};
        } else {
            len++;
        }

        head = head[cs];
    }

    if (!current) {
        current = str.slice(0, len + 1);
    }

    if (!used[str]) {
        used[str] = 1;
    } else {
        used[str]++;
        current += used[str];
    }

    answer.push(current)
}

console.log(answer.join('\n'))