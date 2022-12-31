let fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

const cache = [0,1];

for (let i = 2; i <= input; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
}

console.log(cache[input]);
