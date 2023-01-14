const fs = require('fs');
const input = +fs.readFileSync('./dev/stdin').toString().trim();

const cache = [1, 1, 2]

for (let i = 3; i <= input; i++) {
    cache[i % 3] = (cache[ (i - 1) % 3] + cache[ (i - 2) % 3]) % 10007;
}

console.log(cache.at(input % 3) % 10007);
