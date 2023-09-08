const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin')


const cache = [0, 1, 1];

const dp = n => {
    if (cache[n]) {
        return cache[n];
    }
    
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 2] + cache[i - 1];
    }

    return cache.at(-1);
}

console.log(dp(input), input - 2);
