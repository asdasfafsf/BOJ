
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
    .trim()
	.split('\n')
    .slice(0, -1)
    .map(elem => elem.split(' ').map(Number));

const gcd = (a, b) => {
    while (b > 0) {
        let c = a;
        a = b;
        b = c % b;
    }

    return a;
}

const lcm = (a, b) => a * b / gcd(a, b);
const tmpLcm = (a, b, gcd) => a * b / gcd;

const answer = input.map(([분자, 분모]) => {
    let 계산용분자 = 1;
    let 계산용분모 = 1;

    const results = [];
    while (true) {
        계산용분모++;

        if (계산용분자/계산용분모 > 분자/분모) {
            continue;
        }

        const 계산용분모와분모의최대공약수 = gcd(분모, 계산용분모);
        const 계산용분모와분모의최소공배수 = (분모 * 계산용분모) / 계산용분모와분모의최대공약수;

        const 임시계산용분자 = 계산용분자 * (계산용분모와분모의최소공배수 / 계산용분모)
        const 임시분자 = 분자 * (계산용분모와분모의최소공배수 / 분모);

        let 계산용분자2 = 임시분자 - 임시계산용분자;
        let 계산용분모2 = 계산용분모와분모의최소공배수;

        const 분자와분모의최대공약수 = gcd(계산용분모2, 계산용분자2);

        계산용분모2 = 계산용분모2 / 분자와분모의최대공약수;
        계산용분자2 = 계산용분자2 / 분자와분모의최대공약수;

        if (계산용분모2 >= 1_000_000) {
            continue;
        }

        분자 = 계산용분자2
        분모 = 계산용분모2

        results.push(계산용분모);
        계산용분모--;
        if (분자 === 0) {
            break;
        }
    }

    return results.join(' ');
})

console.log(answer.join('\n'));