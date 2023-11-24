const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const arr = [...input[1].split(' ').map(Number)];
const [a, b] = input[2]
    .split(' ')
    .map(Number)
    .map(elem => elem - 1);


if (typeof arr[a] === 'undefined' || typeof arr[b] === 'undefined') {
    console.log(-1)
} else {
    const visited = arr.map(elem => -1);
  
    const queue = [[a, 0]];
    visited[a] = 0;
    let current = 0;
    let end = false;

    while (queue.length !== current && !end) {
        const [currentNode, currentWeight] = queue[current];
        const nextWeight = currentWeight + 1;
        const distance = arr[currentNode];

        if (currentNode === b) {
            break;
        }

        for (let nextNode = currentNode + distance; nextNode < arr.length;) {
            if (visited[nextNode] === -1) {
                visited[nextNode] = nextWeight;
                queue.push([nextNode, nextWeight]);

                if (nextNode === b) {
                    end = true;
                    break;
                }
            }
            nextNode = nextNode + distance;
        }
        for (let nextNode = currentNode; nextNode >= 0;) {
            if (visited[nextNode] === -1) {
                visited[nextNode] = nextWeight;
                queue.push([nextNode, nextWeight]);

                if (nextNode === b) {
                    end = true;
                    break;
                }
            }
            nextNode = nextNode - distance;
        }

        current++;
    }

    console.log(visited[b])
}
