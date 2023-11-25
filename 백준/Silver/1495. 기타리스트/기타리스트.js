const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, S, M] = input[0].split(' ').map(Number);
const volumes = input[1].split(' ').map(Number);
const visited = Array.from({length: N + 1}, () => Array.from({length: 1001}, () => false))

let answer = -1;

const recursion = (depth, volume) => {
    if (depth === N) {
        answer = Math.max(answer, volume);
        return;
    }

    const incOrDecVolume = volumes[depth];
    const nextVolumes = [volume - incOrDecVolume, volume + incOrDecVolume];
    const nextDepth = depth + 1;

    for (const nextVolume of nextVolumes) {
        if (nextVolume > -1 && nextVolume <= M && visited[nextDepth][nextVolume] === false) {
            visited[nextDepth][nextVolume] = true;
            recursion(nextDepth, nextVolume);
        }
    }
}

recursion(0, S);

console.log(answer)