const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

const Q = +input[0];

for (let i = 1; i <= Q; i++) {
    const [TA, TB, VA, VB] = input[i].split(' ').map(Number)

    let 걸린시간 = VB * TB;

    const A가남은갯수 = VA - Math.floor(걸린시간 / TA);
    // console.log(`A가남은갯수 : ${A가남은갯수}`)
    // console.log(`현재걸린시간 : ${걸린시간}`)

    if (A가남은갯수 % 2 === 1) {
        const A가마지막작업이면서남은시간 = 걸린시간 >= TA 
            ? TA - (걸린시간 % TA)
            : (TA - 걸린시간);
        
        // console.log(걸린시간 > TA )
        // console.log(`A가마지막작업이면서남은시간 : ${A가마지막작업이면서남은시간}`)
        걸린시간 += A가마지막작업이면서남은시간;
    }
    걸린시간 += Math.floor(Math.max(A가남은갯수, 0) / 2) * TA;
    console.log(걸린시간)
    // break;
}


