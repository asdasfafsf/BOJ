const [[N, H], ...rooms] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(BigInt));

let left = 0n
let right = rooms.reduce((pv, [t, a, h]) => pv + (((h / H) + 1n) * a)  , 0n);
let answer = right;

while (left <= right) {
    let mid = (left + right) / 2n
    let attackDamage = H;
    let currentHp = mid;
    let isAlive = true;

    for (const [t, a, h] of rooms) {
        if (t === 1n) { 
            let heroTurns = h / attackDamage;
            if (heroTurns * attackDamage < h) {
                heroTurns += 1n
            }
            currentHp -= (heroTurns - 1n) * a;

            if (currentHp <= 0n) {
                isAlive = false;
                break;
            }
        } else {
            currentHp = currentHp + h > mid ? mid : currentHp + h;
            attackDamage += a;
        }
    }

    if (isAlive) {
        answer = mid < answer ? mid : answer;
        right = mid - 1n;
    } else {
        left = mid + 1n;
    }
}

console.log(answer.toString());
