const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n')
                .map(elem => elem.split(' ').map(Number));


const cache = new Array(21)
                    .fill(false)
                    .map(elem => new Array(21)
                                        .fill(false)
                                        .map(elemElem => new Array(21)
                                                            .fill(false)))

const w = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    }

    if (a > 20 || b > 20 || c > 20) {
        cache[20][20][20] = w(20, 20, 20);
        return cache[20][20][20];
    }

    if (cache[a][b][c] !== false) {
        return cache[a][b][c];
    }

    if (a < b && b < c) {
        cache[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
        return cache[a][b][c];
    }

    cache[a][b][c]  = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);

    return cache[a][b][c] 
}


input.forEach(elem => {
    const [a, b, c] = elem;

    if (a === -1 && b === -1 & c === -1) {
        return;
    }
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
});
