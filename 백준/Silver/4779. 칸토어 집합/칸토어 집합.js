const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const recursion = (n, str) => {
    if (n === 0) {
        return str
    }

    return recursion(n - 1, str) + recursion(n - 1, ' ') + recursion(n - 1, str);
}

input.forEach(elem => console.log(recursion(elem, '-')));