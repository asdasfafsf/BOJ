const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();


const N = +input;

const queue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let current = 1;

while (queue.length !== current) {
    const data = queue[current];
    const target = +data.charAt(data.length - 1);

    for (let i = 0; i < target; i++) {
        queue.push(`${data}${i}`);
    }

    current++;
}
console.log(queue[N] ?? -1);