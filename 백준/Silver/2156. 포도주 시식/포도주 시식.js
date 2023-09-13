const fs = require('fs')
// const input = +fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .map(Number);


const arr = input.slice(1);

if (arr.length < 3) {
    console.log(arr.reduce((a, b) => a + b))
} else {
    const cache = new Array(Math.min(arr.length, 3)).fill(0);
    cache[0] = arr[0];
    cache[1] = arr[1] + arr[0];
    cache[2] = Math.max(cache[1], cache[0] + arr[2], arr[1] + arr[2]);

    for (let i = 3; i < arr.length; i++) {
        const cal = Math.max(cache[i - 3] + arr[i - 1] + arr[i], cache[i - 2] + arr[i]);
        cache[i] = Math.max(cal, cache[i - 1]);
        
    }

    console.log(cache.at(-1));
}