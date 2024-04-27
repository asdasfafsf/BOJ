const [[N, M, K], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));




const find = (a, parents) => {
    if (a === parents[a]) {
        return a;
    }


    return (parents[a] = find(parents[a], parents));
}
const union = (a, b, parents) => {
    a = find(a, parents);
    b = find(b, parents);

    if (a === b) {
        return;
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}

const answer = [];
const nodes = arr.map((elem, index) => [elem[0] - 1, elem[1] - 1, index + 1])
const parents = Array.from(Array(N), (_, k) => k);


for (let k = 0; k < K; k++) {
    for (let i = 0; i < parents.length; i++) {
        parents[i] = i;
    }

    let sum = 0;
    for (let i = k; i < nodes.length; i++) {
        const [a, b, w] = nodes[i];

        if (find(a, parents) === find(b, parents)) {
            continue;
        }

        union(a, b, parents);
        sum += w; 
    }

    for (let i = 0; i < parents.length; i++) {
        find(i, parents)
    }
  
    if ([...new Set(parents)].length > 1) {
        answer.push.apply(answer, Array(K - k).fill(0))
        break;
    }

    answer.push(sum);
    // break;
}


console.log(answer.join(' '))