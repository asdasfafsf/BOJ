const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

const queue = Array.from(Array(+input), (_, k) => k + 1);
let current = 0;


while (queue.length !== current) {
    const data = queue[current];

    if  (current % 2 === 1) {
        queue.push(data);
    }
    current++;
}
console.log(queue.at(-1))