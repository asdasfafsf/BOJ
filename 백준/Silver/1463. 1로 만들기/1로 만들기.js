let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const num = +input;
const cache = [0, 0];

for (let i = 2; i <= num; i++) {
    cache[i] = cache[i -1] + 1;

    if (i % 6 === 0) {
        cache[i] = Math.min(cache[i], cache[i / 2] + 1, cache[i / 3] + 1);
    } else if (i % 2 === 0) {
        cache[i] = Math.min(cache[i], cache[i / 2] + 1);
    } else if (i % 3 === 0) {
        cache[i] = Math.min(cache[i], cache[i / 3] + 1);
    }
}

console.log(cache[num]);