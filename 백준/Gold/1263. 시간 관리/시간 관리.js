
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];

const works = input
    .slice(1)
    .map(elem => elem.split(' ').map(Number))
    .sort((a, b) => {
        const [at, as] = a;
        const [bt, bs] = b;

        if (as === bs) {
            return bt - at;
        }

        return bs - as;
    })

let currentTime = works[0][1];
for (const [T, S] of works) {
    // console.log(`현재 시간 ${currentTime}`)
    // console.log(`걸리는 시간 ${T} 마감 시간 ${S}`);

    if (currentTime <= S) {
        // console.log('마감 시간까지 일을 끝냅니다');
        currentTime -= T;
        // console.log(`현재 시간이 ${currentTime} 이 되었습니다.`)
    } else {
        const needTime = currentTime - S;
        // console.log(`일을 끝내지 못했습니다. ${needTime}만큼 더 빨리 시작해야 합니다.`);

        currentTime -= (needTime + T);
    }

    // console.log();
}

console.log(currentTime >= 0 ? currentTime : -1)