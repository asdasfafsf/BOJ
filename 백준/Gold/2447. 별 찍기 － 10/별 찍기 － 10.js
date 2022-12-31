let fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let str = '';


for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        let star = '*';

        let value = 1;
        while (value < input) {
            if (Math.floor(i / value) % 3 == 1 && Math.floor(j / value) % 3 == 1) {
                star = ' ';
                break;
            }
            value *= 3;
        }
        str += star
    }
    str += '\n';
}

console.log(str.trim());
