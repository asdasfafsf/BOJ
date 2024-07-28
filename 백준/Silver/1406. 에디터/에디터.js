const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[1];

const lStack = input[0].split('');
const rStack = []
for (let i = 2; i < input.length; i++) {
    const [order, str] = input[i].split(' ');

    if (order === 'L') {
        if (lStack.length > 0) {
            rStack.push(lStack.pop());
        }
    } else if (order === 'D') {
        if (rStack.length > 0) {
            lStack.push(rStack.pop());
        }
    } else if (order === 'B') {
        lStack.pop();
    } else if (order === 'P') {
        lStack.push(str);
    }
}

console.log(lStack.join('') + rStack.reverse().join(''))