const [[N, M], ...relations] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const dist = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
    dist[i][i] = 0;
}

for (const [s, e] of relations) {
    dist[s][e] = 1;
    dist[e][s] = 1;
}

for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}

let maxDay = 0;
const dailyNewFriends = [];

for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
        if (dist[i][j] !== Infinity && dist[i][j] > 1) {
            const daysNeeded = Math.ceil(Math.log2(dist[i][j]));
            
            while (dailyNewFriends.length < daysNeeded) {
                dailyNewFriends.push(0);
            }
            
            dailyNewFriends[daysNeeded - 1]++;
            
            if (daysNeeded > maxDay) {
                maxDay = daysNeeded;
            }
        }
    }
}

console.log(maxDay);
if (maxDay) {
    console.log(dailyNewFriends.join('\n'))
}