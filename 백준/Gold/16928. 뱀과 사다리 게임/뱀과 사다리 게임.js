const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const sadari = Object.fromEntries(input.slice(1).map(elem => elem.split(' ').map(Number)));
// const snake = Object.fromEntries(input.slice(1 + N, 1 + M + N).map(elem => elem.split(' ').map(Number)));


const visited = new Array(101).fill(-1);
visited[1] = 0;
const queue = [1];
let current = 0;


while(queue.length !== current) {
    const peek = queue[current];

    if (peek === 100) {
        break;
    }

    [1,2,3,4,5,6].forEach(eye => {
        const data = (peek + eye);
        if (visited[data] !== -1) {
            return;
        }

        if (typeof sadari[data] !== 'undefined') {
            const sum = sadari[data];

            if (visited[sum] === -1) {
                visited[data] = visited[peek] + 1;
                visited[sum] = visited[peek] + 1;
                queue.push(sum);
            }
        } else {
            visited[data] = visited[peek] + 1;
            queue.push(data)
        }
    })

    current++;
}

// console.log(visited);

console.log(visited[100])