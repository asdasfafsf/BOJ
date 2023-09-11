const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim();


const cache = Array.from({length: 10}).map(elem => new Array(input + 1).fill(0))

const recursion = (depth, current) => {
    let result = 0;

    if (cache[current][depth] !== 0) {
        return cache[current][depth];
    }

    if (depth === input) {
        return 1;
    }

    if (current < 9) {
        result += (recursion(depth + 1, current + 1) % 1000000000);
    }

    if (current > 0) {
        result += (recursion(depth + 1, current - 1) % 1000000000);
    }

    cache[current][depth] = (result % 1000000000);

    return cache[current][depth];
}

const result = [1,2,3,4,5,6,7,8,9].reduce((pv, cv) => (pv + recursion(1, cv) % 1000000000), 0)

console.log(result % 1000000000);