const [[N], B] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


let answer = 0;

const isAllZero = !B.some((elem) => elem !== 0);

if (isAllZero) {
    console.log(0);
    process.exit(0);
}


while (true) {
    const hasOne = B.some((elem) => elem % 2 === 1);
    for (let i = 0; i < B.length; i++) {
        if (hasOne) {
            if (B[i] % 2 === 1) {
                B[i]--;
                answer++;
            }
        } else {
            B[i] /= 2;
        }
    }

    if (!hasOne) {
        answer++;
    }

    const isAllZero = !B.some((elem) => elem !== 0);

    if (isAllZero) {
        break;
    }
}

console.log(answer)