const [[n], [m], ...nodes] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const dists = Array.from({length: n + 1}, 
        () => Array.from({length: n + 1}, () => Infinity));

const nextNodes = Array.from({length: n + 1}, 
        () => Array.from({length: n + 1}, () => 0));
        
for (const [start, end, weight] of nodes) {
    if (weight < dists[start][end]) {
        dists[start][end] = Math.min(weight, dists[start][end]);
        nextNodes[start][end] = end;
    }
}

for (let i = 1; i <= n; i++) {
    dists[i][i] = 0;
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j<= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (dists[j][k] > dists[j][i] + dists[i][k]) {
                dists[j][k] = dists[j][i] + dists[i][k];
                nextNodes[j][k] = nextNodes[j][i];
            }
        }
    }
}


const answer = [];
answer.push.apply(answer, dists.slice(1).map(elem => elem.map(elemElem => elemElem === Infinity ? 0 : elemElem).slice(1).join(' ')));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        let nextNode = nextNodes[i][j];

        if (nextNode === 0) {
            answer.push(0);
            continue;
        }

        const path = [i];

        while (nextNode !== j && nextNode !== 0) {
            path.push(nextNode);
            nextNode = nextNodes[nextNode][j]
        }

        path.push(nextNode);
        answer.push(path.length + ' ' + path.join(' '));
    }
}

console.log(answer.join('\n'));