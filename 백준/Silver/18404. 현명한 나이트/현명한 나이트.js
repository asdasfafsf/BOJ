
class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    push = (data) => {
        const nextNode = new Node(data);

        if (this.front == null) {
            this.front = nextNode;
        } else {
            this.rear.next = nextNode;
        }

        this.rear = nextNode;
        this.length++;
    }

    pop = () => {
        if (this.length > 0) {
            this.length--;
        }

        const front = this.front;
        const newFront = front.next;
        front.next = undefined;

        this.front = newFront;
        
        return front.data;
    }

    peek = () => {
        return this.front.data ?? null
    }


    isEmpty = () => {
        return this.front === null;
    }

    isFull = () => {
        return this.front !== null;
    }

    size = () => {
        return this.length;
    }
}

const [[N, M], [X, Y], ...horses] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(ee => ee - 1));


//(X-2,Y-1), (X-2,Y+1), (X-1,Y-2), (X-1,Y+2), (X+1,Y-2), (X+1,Y+2), (X+2,Y-1), (X+2,Y+1)
const dp = [[-1, -2], [1, -2], [-2, -1], [2, -1], [-2, 1], [2, 1], [-1, 2], [1, 2]];


const dist = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
const queue = new Queue();
queue.push([Y, X, 0])
dist[Y][X] = 0;
let current = 0;

while (queue.isFull()) {
    const [cy, cx, cd] = queue.pop();
    const nd = cd + 1;

    if (dist[cy][cx] < cd) {
        continue;
    }

    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + cy, dx + cx];
        if (ny < 0 || ny > N || nx < 0 || nx > N || dist[ny][nx] !== Infinity) {
            continue;
        } 

        dist[ny][nx] = nd;
        queue.push([ny, nx, nd]);

    }
    current++;
}


const answer = horses.map(([x, y]) => dist[y][x]).join(' ')
console.log(answer)