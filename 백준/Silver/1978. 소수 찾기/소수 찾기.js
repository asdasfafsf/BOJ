let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let len = parseInt(input[0]);
let arr = input[1].split(' ').filter(e => {
    const num = parseInt(e.trim());

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i < num; i+=2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
});

console.log(arr.length);