const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString();


const dp = input => {
    const cache = [1, 1];

    for (let i = cache.length; i <= input; i++) {
        cache[i] = (cache[i - 2] + cache[i - 1]) % 15746;
    }

    return cache.at(-1);
}


console.log(dp(input));