const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());



let value = 1;
let index = 666;

while (value !== input) {
    index++;
    if (index.toString().indexOf('666') > -1) {
        value++;
    }
}

console.log(index);