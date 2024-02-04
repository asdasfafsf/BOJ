const [[N, M], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));




const parents = Array.from({length: N}, (_, i) => i)
const find = a => {
    if (a === parents[a]) {
        return a;
    }

    return (parents[a] = find(parents[a]));
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (parents[a] === parents[b]) {
        return;
    }

    parents[Math.min(a, b)] = Math.max(a, b);
}

let answer = 0;
for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i];
    const aa = find(a);
    const bb = find(b);

    if (aa === bb) {
        answer = i + 1;
        break;
    }

    union(a, b);
}

console.log(answer)