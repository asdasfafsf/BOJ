
class Queue {
    constructor() {
        this.queue = [];
        this.length = 0;
        this.front = -1;
        this.rear = -1;
    }


    enqueue = (data) => {
        if (this.front === -1) {
            this.front++;
        }
        this.rear++;
        this.queue[this.rear] = data;
    }

    dequeue = () => {
        const data = this.queue[this.front];

        if (!data) {
            return null;
        }

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
        }


        return data;
    }

    peek = () => {
        return this.queue[this.front] ?? null;
    }

    isFull = () => {
        return !this.isEmpty();
    }

    isEmpty = () => {
        return this.front === -1;
    }
}

const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               

const [N, M] = input.at(0).split(' ').map(Number);
const arr = [
    new Array(M + 2).fill(0),
    ...input.slice(1).map(elem => [0, ...elem.split('').map(Number), 0]),
    new Array(M + 2).fill(0),
];

const canVisit = (y, x, visited, graph) => visited[y][x] === 0 && graph[y][x] === 1;
const visited = arr.map(elem => new Array(elem.length).fill(0));

let counter = 0;
const queue = new Queue();
queue.enqueue([1, 1])
visited[1][1] = 1;

while (queue.isFull()) {
    counter++;

    const [y, x] = queue.dequeue();
    

    if (y === N && x === M) {
        break;
    }

    const uy = y + 1;
    const dy = y - 1;
    const ux = x + 1;
    const dx = x - 1;

    if (canVisit(uy, x, visited, arr)) {
        queue.enqueue([uy, x])
        visited[uy][x] = visited[y][x] + 1;
    }

    if (canVisit(dy, x, visited, arr)) {
        queue.enqueue([dy, x])
        visited[dy][x] = visited[y][x] + 1;
    }

    if (canVisit(y, ux, visited, arr)) {
        queue.enqueue([y, ux])
        visited[y][ux] = visited[y][x] + 1;
    }

    if (canVisit(y, dx, visited, arr)) {
        queue.enqueue([y, dx])
        visited[y][dx] = visited[y][x] + 1;
    }

}

console.log(visited[N][M]);



