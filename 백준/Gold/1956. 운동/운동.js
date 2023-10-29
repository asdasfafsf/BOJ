

const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const [V, E] = input[0].split(' ').map(Number);

const arr = Array.from({length: V}, () => Array.from({length: V}, () => Infinity))
for (let i = 1; i < input.length; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);
    arr[s - 1][e - 1] = w;
}

for (let i = 0; i < arr.length; i++) {
    arr[i][i] = 0;
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            arr[j][k] = Math.min(arr[j][k], arr[j][i] + arr[i][k])
        }
    }
}


let answer = Infinity;
for (let i = 0; i < arr.length; i++) {
    const dist = arr[i];

    for (let j = i + 1; j < dist.length; j++) {
        const start = arr[i][j];
        const returned = arr[j][i];

        answer = Math.min(answer, start + returned);
    }
}


console.log(answer === Infinity ? -1 : answer);