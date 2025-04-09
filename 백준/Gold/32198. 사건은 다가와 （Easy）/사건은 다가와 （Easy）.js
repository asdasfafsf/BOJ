const [[N], ...events] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

events.forEach(e => {
    e[1] += 1000;
    e[2] += 1000;
});
events.sort((a, b) => a[0] - b[0]);

const maxT = events.at(-1)[0];
const dp = Array.from({ length: maxT + 1 }, () => Array(4001).fill(Infinity));
dp[0][1000] = 0;

for (let t = 1; t <= maxT; t++) {
    for (let x = 0; x <= 2000 * 2; x++) {
        let min = Infinity;
        if (x > 0) {
            min = Math.min(min, dp[t - 1][x - 1] + 1);
        }
        min = Math.min(min, dp[t - 1][x]);
        if (x < 4000) { 
            min = Math.min(min, dp[t - 1][x + 1] + 1);
        }
        dp[t][x] = min;
    }

    while (events.length && events[0][0] === t) {
        const [_, a, b] = events.shift();
        for (let x = a + 1; x < b; x++) {
            dp[t][x] = Infinity;
        }
    }
}

const answer = Math.min(...dp[maxT]);
console.log(answer === Infinity ? -1 : answer);