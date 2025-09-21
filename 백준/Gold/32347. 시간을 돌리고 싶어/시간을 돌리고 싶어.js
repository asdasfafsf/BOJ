const [[N, K], powers] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

let left = 0;
let right = 400001;

while (left <= right) {
    const T = Math.floor((left + right) / 2);

    let currentDate = N - 1;
    const visited = new Set();
    let jumpsUsed = 0;

    while (currentDate > 0 && currentDate < N) {
        if (powers[currentDate] === 1 && !visited.has(currentDate) && jumpsUsed < K) {
            visited.add(currentDate);
            jumpsUsed++;
            currentDate -= T;
        } else {
            currentDate++;
        }
    }

    if (currentDate >= N) {
        left = T + 1;
    } else {
        right = T - 1;
    }
}

console.log(left);