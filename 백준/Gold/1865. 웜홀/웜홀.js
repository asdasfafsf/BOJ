const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


let T = +input[0];
let index = 0;

const answer = [];

while (T--) {
    const [N, M, W] = input[++index].split(' ').map(Number);
    const dist = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => Infinity))
    for (let i = 0; i < M; i++) {
        const [S, E, T] = input[++index].split(' ').map(Number);
        dist[S][E] = Math.min(T, dist[S][E]);
        dist[E][S] = Math.min(T, dist[E][S]);
    }

    for (let i = 0; i < W; i++) {
        const [S, E, T] = input[++index].split(' ').map(Number);
        dist[S][E] = Math.min(-T, dist[S][E]);
    }


    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            for (let k = 1; k <= N; k++) {
                dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
            }
        }
    }
    

    let ans = 'NO';
    for (let i = 1; i < dist.length; i++) {
        if (dist[i][i] < 0) {
            ans = 'YES';
            break;
        }
    }

    answer.push(ans)
}

console.log(answer.join('\n'))