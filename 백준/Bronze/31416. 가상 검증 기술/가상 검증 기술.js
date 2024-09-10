const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

const Q = +input[0];
const answer = [];

for (let i = 1; i <= Q; i++) {
    const [TA, TB, VA, VB] = input[i].split(' ').map(Number)

    let 걸린시간 = VB * TB;

    const A가남은갯수 = VA - Math.floor(걸린시간 / TA);

    if (A가남은갯수 % 2 === 1) {
        걸린시간 += TA - (걸린시간 % TA);
    }
    걸린시간 += Math.floor(Math.max(A가남은갯수, 0) / 2) * TA;
    answer.push(걸린시간)
}


console.log(answer.join('\n'))