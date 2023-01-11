const fs = require('fs');
const input = (fs.readFileSync('/dev/stdin').toString().trim().split('\n'));

const cache = [1, 1, 2];
const factorial = n => {
    if (cache[n]) {
        return (cache[n]);
    }

    for (let i = cache.length; i <= n; i++) {
        cache[i] = cache[i - 1] * i;
    }

    return (cache[n]);
}

const combine = (n1, n2) => factorial(n2) / (factorial (n2 - n1) * factorial(n1))

input.slice(1)
    .map(e => e.split(' ').map(Number))
    .forEach(element => console.log(parseInt(combine(...element) + 0.5)));

