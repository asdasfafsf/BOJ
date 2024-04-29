const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [n, m] = input[0].split(' ').map(Number);
const dist = Array.from(Array(n), () => Array(n).fill(Infinity));
const path = Array.from(Array(n), () => Array(n).fill(Infinity));

for (let i = 0; i < dist.length; i++) {
    dist[i][i] = 0;
}

for (let i = 1; i < input.length; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);

    if (dist[s - 1][e - 1] > w) {
        dist[s - 1][e - 1] = w;
        path[s - 1][e - 1] = e - 1;
    }

    if (dist[e - 1][s - 1] > w) { 
        dist[e - 1][s - 1] = w;
        path[e - 1][s - 1] = s - 1;
    }
}


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (dist[j][k] > dist[j][i] + dist[i][k]) {
                dist[j][k] = dist[j][i] + dist[i][k];
                path[j][k] = path[j][i];
            }
        }
    }
}

console.log(path.map(elem => elem.map(ee => ee === Infinity ? '-' : ee + 1).join(' ')).join('\n'))