const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

console.log(Math.pow(2, input) - 1);


let str = '';

const hanoi = (n, start, end) => {
    if (n == 1) {
        str += `${start} ${end}\n`
        return;
    }

    hanoi(n - 1, start, 6 - (start + end))
    hanoi(1, start, end)
    hanoi(n - 1, 6 - (start + end), end)
}

hanoi(input, 1, 3);

console.log(str.trim());