const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => parseInt(e.trim()));
//const input = fs.readFileSync('./4948_input.txt').toString().trim().split('\n').map(e => parseInt(e.trim()));


const max = Math.max.apply(null, input) * 2;
const arr = [0, 0];

for (let i = 2; i <= max; i++) {
    arr[i] = i;
}

for (let i = 2; i < Math.ceil(Math.sqrt(arr.length)); i++) {
    if (arr[i] === 0) {
        continue;
    }

    for (let j = 2 * i; j < arr.length; j += i) {
        arr[j] = 0;
    }
}


for (let i = 0; i < input.length - 1; i++) {
    const value = input[i];
    if (value == 0) {
        break;
    }

    console.log(arr.filter(e => e > value && e <= value * 2).length);
}