const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')


const N = +input.shift();
const dist = input.map(elem => elem.split(' ').map(Number));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            if (dist[j][k] > dist[j][i] + dist[i][k]) {
                console.log(-1);
                process.exit(0)
            }
        }
    }
}


let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            if (dist[j][k] === dist[j][i] + dist[i][k]) {
                if (j !== k && j !== i && i !== k) {
                    dist[j][k] = Infinity;
                }
            }
        }
    }
}
// console.log(dist)

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        if (dist[i][j] < Infinity) {
            answer += dist[i][j]
        }
    }
}
console.log(answer)