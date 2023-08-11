const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(elem => elem.split(' ').map(Number));


input.forEach(elem => {
    const [a, b] = elem;

    if (a && b) {
        if (a % b === 0 && a / b > 0) {
            console.log('multiple');
        } else if (b % a === 0 && b / a > 0) {
            console.log('factor');
        } else {
            console.log('neither')
        }
    }

    return;
})