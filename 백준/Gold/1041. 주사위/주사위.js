const [[N], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(BigInt));


if (N === 1n) {
    const answer = (arr.reduce((pv, cv) => pv + cv, 0n)) - arr.reduce((pv, cv) => pv > cv ? pv : cv, 0n)
    console.log(answer.toString())
} else {
    let mins = Array.from({length: 3}, () => 100000000000n);

    for (let i = 0; i < 6; i++) {
        if (mins[0] > arr[i]) {
            mins[0] = arr[i];
        }

        for (let j = i + 1; j < 6; j++) {
            if (i + j === 5) {
                continue;
            }

            if (mins[1] > arr[i] + arr[j]) {
                mins[1] = arr[i] + arr[j];
            }

            for (let k = j + 1; k < 6; k++) {
                if (j + k === 5 || i + k === 5) {
                    continue;
                }

                if (mins[2] > arr[i] + arr[j] + arr[k]) {
                    mins[2] = arr[i] + arr[j] + arr[k];
                }
            }
        }
    }
    const answer = (4n * mins[2]) + ((8n * N - 12n) * mins[1]) + ((5n * N * N - 16n * N + 12n) * mins[0])
    console.log(answer.toString())
}

