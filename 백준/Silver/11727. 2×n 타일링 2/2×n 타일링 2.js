const fs = require('fs')
const input = +(fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim());


const cache = new Array(input).fill(0);
cache[0] = 0;
cache[1] = 1;
cache[2] = 3;

for (let i = 3; i <= input; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2] * 2) % 10007
}

console.log(cache.at(input));