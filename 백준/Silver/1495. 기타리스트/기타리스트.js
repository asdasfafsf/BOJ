const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, S, M] = input[0].split(' ').map(Number);
const volumes = input[1].split(' ').map(Number);
const dp = Array.from({length: N}, () => Array.from({length: 1001}, () => -1))


if (S - volumes[0] > -1 && S - volumes[0] <= M) {
    dp[0][S - volumes[0]] = S - volumes[0];
}

if (S + volumes[0] > -1 && S + volumes[0] <= M) {
    dp[0][S + volumes[0]] = S + volumes[0];
}

for (let i = 0; i < dp.length - 1; i++) {
    for (let j = 0; j < dp[i].length; j++) {
        const volume = dp[i][j];

        if (volume == -1) {
            continue;
        }

        const incOrDecVolume = volumes[i + 1];

        for (const nextVolume of [volume - incOrDecVolume, volume + incOrDecVolume]) {
            if (nextVolume > -1 && nextVolume <= M) {
                dp[i + 1][nextVolume] = nextVolume;
            }
        }
    }
}

console.log(Math.max(...dp.at(-1)))