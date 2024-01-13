const [[x1, y1], [x2, y2], [x3, y3]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const answer = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);

if (answer === 0) {
    console.log(0);
} else if (answer > 0) {
    console.log(1);
} else {
    console.log(-1)
}

