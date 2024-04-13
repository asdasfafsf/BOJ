const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1);

const map = {};
input.forEach((elem, index) => {
    for (let i = 0; i < elem.length; i++) {
        const str = elem.charAt(elem.length - 1 - i);

        if (!map[str]) {
            map[str] = 0;
        }

        map[str] += Math.pow(10,i)
    }
})

const values = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(elem => elem[0]);

for (let i = 9; i > 9 - values.length; i--) {
    map[values[9 - i]] = i;
}

const answer = input.reduce((pv, cv) => {
    let sum = 0;

    for (let i = 0; i < cv.length; i++) {
        sum += Math.pow(10, cv.length - 1 - i) * map[cv.charAt(i)];
    }

    return pv + sum;
}, 0)

console.log(answer)