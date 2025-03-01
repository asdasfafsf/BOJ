const [[N, M], ...spaces] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const diff = [];

for (const space of spaces) {
    const newSpace = [...new Set(space)].sort((a, b) => a - b);
    const map = new Map()
    let count = 0;
    for (const size of newSpace) {
        map.set(size, count++)
    }

    diff.push(space.map(elem => map.get(elem)).join(','));
}

let answer = 0;
for (let i = 0; i < diff.length; i++) {
    for (let j = i + 1; j < diff.length; j++) {
        if (diff[i] === diff[j]) {
            answer++;
        }
    }
}

console.log(answer);