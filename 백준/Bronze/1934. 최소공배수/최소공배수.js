const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(Number)).slice(1);


const gcd = (a, b) => {
    while (b > 0) {
        const c = a;
        a = b;
        b = c % b;
    }

    return a;
}

const lcm = (a, b) => a * b / gcd(a, b);

input.forEach(elem => {
    let a = Math.max(...elem);
    let b = Math.min(...elem)

    const r = lcm(a,b);

    console.log(Number.isNaN(r) ? '0' : r);
})