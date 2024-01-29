const [[N, M, K], ...fireballs] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];


let currentFireballs = fireballs.map(elem => {
    let [r, c, m, s, d] = elem;
    return [r - 1, c - 1, m, s, d];
});


const map = Array.from({length: N}, () => Array.from({length: N}, () => []));
for (let k = 0; k < K; k++) {
    let indexes = [];

    for (const fireball of currentFireballs) {
        const [r, c, m, s, d] = fireball;

        const [dy, dx] = dp[d];
        let [nextR, nextC] = [(((dy * s) + (N * s)) + r) % N, (((dx * s) + (N * s)) + c) % N];

        // console.log(`${r} ${c} 에서 ${nextR} ${nextC}로 이동합니다.`)

        map[nextR][nextC].push([nextR, nextC, m, s, d]);
        indexes.push([nextR, nextC]);
    }


    let newFireballs = [];

    for (const [r, c] of indexes) {
        if (map[r][c].length > 1) {
            const targetFireballs = map[r][c];

            const isOdd = targetFireballs.every((elem) => elem[4] % 2 === 1);
            const isEven = targetFireballs.every((elem) => elem[4] % 2 === 0);

            let mass = targetFireballs.reduce((pv, cv) => pv + cv[2], 0);
            let dividedMass = Math.floor(mass / 5);

            let speed = targetFireballs.reduce((pv, cv) => pv + cv[3], 0);
            let dividedSpeed = Math.floor(speed / targetFireballs.length);

            const nextDp = (isOdd || isEven) ? [0,2,4,6] : [1,3,5,7]


            if (dividedMass > 0) {
                for (const nextPoint of nextDp) {
                    newFireballs.push([r, c, dividedMass, dividedSpeed, nextPoint])
                }
            }

            map[r][c] = [];
        } else if (map[r][c].length === 1){
            const targetFireballs = map[r][c];
            const targetFireball = targetFireballs[0];
            newFireballs.push(targetFireball);
            map[r][c] = [];
        }

    }


    currentFireballs = newFireballs;
    // console.log(newFireballs)
    // console.log('')
}


console.log(currentFireballs.reduce((pv, cv) => pv + cv[2], 0))