const [G, P, ...gList] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);


const parents = Array.from({length: P + 1}, (_, k) => k);


const find = a => {
    if (parents[a] === a) {
        return a;
    }

    return (parents[a] = find(parents[a]))
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }

    parents[a] = b;
}

let answer = 0;

for (let i = 0; i < gList.length; i++) {
    const g = find(gList[i]);

    if (g !== 0) {
        union(g, g - 1);
        answer++;
        continue;
    }

    break;
}

console.log(answer)