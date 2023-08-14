const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


const [N, M] = input;
const array = new Array(M).fill(0);

let res = ``;
const recursion = (current) => { 
    if (current === M) {
        res += `${array.join(' ')}\n`;
        return;
    }

    for (let i = 0; i < N; i++) {
        array[current] = i + 1;
        recursion(current + 1);
    }
}


recursion(0);

console.log(res.trim());