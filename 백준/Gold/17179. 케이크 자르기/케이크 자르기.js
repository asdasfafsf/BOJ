const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, M, L] = input[0].split(' ').map(Number)
const S = [];
for (let i = 1; i < M + 1; i++) {
    S.push(+input[i]);
}
S.push(L);

const answer = [];
for (let i = M + 1; i < input.length; i++) {
    const q = +input[i];

    let min = 0;
    let max = L;
    let result = 0;
    while (min <= max) {
        const mid = Math.floor((min + max) / 2)

        let count = 0;
        let left = 0;

        for (const right of S) {
            if (right - left >= mid) {
                count++;
                left = right;
            }
        }

        // console.log(`${mid}크기일 때 ${count}개를 자를 수 있지만 ${q}개를 잘라야해요`)
        // console.log(`이전 min : ${min} max : ${max}`)
        if (count <= q) {
            max = mid - 1;
        } else {
            min = mid + 1;
            result = Math.max(result, mid)
        }
        // console.log(`이후 min : ${min} max : ${max} result : ${result} ${mid}`)
    }

    // console.log('')
    // console.log('')
    // console.log('')
    answer.push(result);
}

console.log(answer.join('\n'))