const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .slice(1)
                    .map(Number);



const cache = [0,1,1,1,2,2,3,4,5,7,9];
const max = Math.max(...input);

const dp = input => {
    for (let i = cache.length; cache.length <= input; i++) {
        cache[i] = cache[i - 1] + cache[i - 5];
    }

    return cache[input];
}

dp(max);

input.forEach(elem => console.log(cache[elem]));