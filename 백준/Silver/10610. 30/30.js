let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const num = BigInt(input
            .split('')
            .sort((a, b) => b - a)
            .join(''));


if (num % BigInt(30) === BigInt(0)) {
    console.log(num.toString());
} else {
    console.log(-1);
}