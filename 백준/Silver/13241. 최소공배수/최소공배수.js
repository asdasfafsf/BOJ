const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(elem => BigInt(+(elem))));


const gcd = (a, b) => {
    while(b != 0){
        tmp = a % b;
    	a = b;
        b = tmp;
    }
    return a;
}

const lcm = (a, b) => ((a * b) / gcd(a, b));

input.forEach(elem => {
    let [a, b] = elem;

    if (b < a) {
        let c = b;
        b = a;
        a = c;
    }

    const r = lcm(a,b);

    console.log(Number.isNaN(r) ? '0' : r + '');
})