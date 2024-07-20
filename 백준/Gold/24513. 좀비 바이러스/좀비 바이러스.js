
class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class Dequeue {
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

    pushBack = () => {
        const rear = this.rear;
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

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let map = [];


for (let i = 1; i < input.length; i++) {
    map.push(input[i].split(' ').map(Number));
}

let queue = new Dequeue();

for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (map[y][x] === 1 || map[y][x] === 2) {
            queue.push([y, x, map[y][x]])
        }
    }
}

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
while(queue.isFull()) {

    const [y, x, value] = queue.pop();

    if (value === 3 || map[y][x] === 3) {
        continue;
    }

    const currentRound = Math.ceil(value / 10);
    const currentVirus = value % 10;

    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + y, dx + x];

        if (ny >= N || ny < 0 || nx >= M || nx < 0) {
            continue;
        }


        if (map[ny][nx] === -1 || map[ny][nx] === 3) {
            continue;
        }



        if (map[ny][nx] === 0) {
            map[ny][nx] = value + 10;
            queue.push([ny, nx, value + 10])
        } else {
            const targetRound = Math.floor(map[ny][nx] / 10);
            const targetVirus = map[ny][nx] % 10;

            if (targetRound === currentRound) {
                if (targetVirus !== currentVirus) {
                    map[ny][nx] = 3;
                }
            }

        }
        
    }
    
    // console.log(map.map(elem => elem.map(elem => (elem).toString().padStart(5, ' ')).join(' ')).join('\n'))
    // console.log('')
}


const answer = [0, 0, 0, 0]

for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (map[y][x] >= 0) {
            answer[map[y][x] % 10]++;
        }   
    }
}

console.log(answer.slice(1).join(' '));