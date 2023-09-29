
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
               


const [N, M, R] = input[0].split(' ').map(Number);
const arr = input.slice(1)
                .map(elem => elem.split(' ').map(Number));;
const graph = Array.from({length: N + 1})
                .map(elem => []);


arr.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
})

graph.forEach(elem => elem.sort((a, b) => b - a));
const visited = new Array(N + 1).fill(false);
const answer = new Array(N + 1).fill(0);
let count = -1;

const bfs = () => {
    const queue = new Queue();
    queue.enqueue(R);
    visited[R] = true;
    answer[R] = ++count;

    while(queue.isFull()) {
        const data = queue.dequeue();
        answer[data] = ++count;
        
        for (const node of graph[data]) {
            if (visited[node] === false) {
                visited[node] = true;
                queue.enqueue(node);
            }
        }
    }
}


bfs();
console.log(answer.slice(1).join('\n'));
