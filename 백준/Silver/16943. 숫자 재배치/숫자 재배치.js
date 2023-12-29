const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ');

   

const [A, B] = input.map(Number);

const target = input[0].split('').sort().reverse().join('');
const visited = Array.from({length: target.length}, () => false);

let answer = -1;
const recursion = (depth, value) => {
    if (depth === target.length - 1) {
        value = +value;

        if (value < B) {
            answer = Math.max(value, answer);
        }

        return;
    }


    for (let i = 0; i < target.length; i++) {
        if (target.charAt(i) === '0' && depth === -1) {
            continue;
        }

        if (visited[i] === false) {
            const piece = target.charAt(i);
            visited[i] = true;
            recursion(depth + 1, value + piece);
            visited[i] = false;
        }
    }
}

recursion(-1, '')
console.log(answer)