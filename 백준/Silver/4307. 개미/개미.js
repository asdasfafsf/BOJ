const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

let index = 0;
let T = Number(input[0]);

const answer = [];

while(T--) {
    const [l, n] = input[++index].split(' ').map(Number);

    let fast = 0;
    let slow = 0;
    
    for (let i = 0; i < n; i++) {
        const point = +input[++index]
        fast = Math.max(fast, Math.min(l - point, point));
        slow = Math.max(l - point, point, slow);
    }

    answer.push(`${fast} ${slow}`);
}

console.log(answer.join('\n'))