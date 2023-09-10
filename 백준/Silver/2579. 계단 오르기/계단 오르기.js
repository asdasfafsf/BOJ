const fs = require('fs')
// const input = +fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .map(Number)
                    .slice(1);




if (input.length < 3) {
    console.log(input.reduce((pv, cv) => pv + cv))
} else {
    const cache = [input[0], input[0] + input[1]];
    cache[2] = Math.max(input[1] + input[2], input[0] + input[2]);

    for (let i = 3; i < input.length; i++) {
    const move1 = cache[i - 3] + input[i - 1] + input[i];
    const move2 = cache[i - 2] + input[i]

    cache[i] = Math.max(move1, move2);
    }
    console.log(cache.at(-1));
}