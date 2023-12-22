const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


let current = B;
let answer = 0;

while (current > A) {
    if (current % 10 === 1) {
        current = (current - 1)/ 10;
        answer++;
    } else if (current % 2 === 0) {
        current /= 2;
        answer++;
    } else {
        break;
    }
}


console.log(current === A ? answer + 1 : -1);

