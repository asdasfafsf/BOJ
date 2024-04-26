const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const genders = input[1].split(' ');


const arr = input.slice(2).map(elem => elem.split(' ').map(Number)).sort((a, b) => a[2] - b[2]);
const parents = Array.from(Array(N + 1), (i, k) => k);


const find = a => {
    if (a === parents[a]) {
        return a;
    }
    
    return (parents[a] = find(parents[a]));
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }
    parents[Math.max(a, b)] = Math.min(a, b);
}


let answer = 0;
for (const [s, e, w] of arr) {
    if (genders[s - 1] === genders[e - 1]) {
        continue;
    }

    const fs = find(s);
    const fe = find(e);

    if (fs === fe) {
        continue;
    }
    union(s, e);
    answer += w;
}

for (let i = 1; i <= N; i++) {
    find(i)
}

if ([...new Set(parents.slice(1))].length > 1) {
    console.log(-1);
} else {
    console.log(answer)
}
