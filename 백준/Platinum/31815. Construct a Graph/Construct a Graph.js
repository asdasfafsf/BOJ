const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());

const N = +input[0];
const D = [];
for (let i = 1; i <= N; i++) {
    D.push(input[i].split(' ').map(Number));
}

let isOk = true;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i !== j && D[i][j] <= 0) {
            isOk = false;
        }
        if (D[i][j] !== D[j][i]) {
            isOk = false;
        }
    }
}

if (!isOk) {
    console.log(-1);
    process.exit(0);
}

for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (D[i][j] > D[i][k] + D[k][j]) {
                console.log(-1);
                process.exit(0);
            }
        }
    }
}

const answer = [];
for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        let isDirectEdge = true;
        for (let k = 0; k < N; k++) {
            if (k !== i && k !== j && D[i][j] >= D[i][k] + D[k][j]) {
                isDirectEdge = false;
                break;
            }
        }
        if (isDirectEdge) {
            answer.push([i + 1, j + 1, D[i][j]]);
        }
    }
}

console.log(answer.length);
console.log(answer.map(elem => elem.join(' ')).join('\n'));
