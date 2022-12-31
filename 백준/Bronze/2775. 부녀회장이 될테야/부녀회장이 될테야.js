let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const T = parseInt(input[0]);




for (let i = 0; i < T; i++) {
    const k = parseInt(input[ i * 2 + 1]);
    const n = parseInt(input[ i * 2 + 2]);


    const cache = [[]];

    if (typeof cache[k] !== 'undefined') {
        if (typeof cache[k][n] !== 'undefined') {
            console.log(cache[k][n]);
            continue;
        }
    }

    for (let j = 0; j <= n; j++) {
        cache[0][j] = j + 1;
    }

    for (let j = 1; j <= k; j++) {
        if (typeof cache[j] === 'undefined') {
            cache[j] = [];
        }
        cache[j][0] = 1;
    }

    for (let ii = 1; ii <= k; ii++) {
        for (let jj = 1; jj < n; jj++) {
            cache[ii][jj] = cache[ii - 1][jj] + cache[ii][jj - 1]; 
        }
    }

    console.log(cache[k][n - 1]);
}
