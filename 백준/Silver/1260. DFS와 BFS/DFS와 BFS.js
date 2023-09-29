

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
               

const [N, M, R] = input.at(0).split(' ').map(Number);
const arr = input.slice(1)
    .map(elem => elem.split(' ')
    .map(Number))
    .sort(([aa, ab], [ba, bb]) => {
        if (aa == ba) {
            return ab - bb;
        }

        return ba - aa;
    })
const graph = Array.from({length: N + 1})
                    .map(elem => []);

arr.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
})
graph.forEach(elem => elem.sort((a, b) => a - b));

const dfsAnswer = [];
const dfs = (R, visited, graph) => {
    visited[R] = true;
    dfsAnswer.push(R);
    for (const node of graph[R]) {
        if (visited[node] === false) {
            dfs(node, visited, graph)
        }
    }
}

let counter = 0;
const bfAnswer = [];
const bfs = (R, visited, graph) => {
    const queue = new Queue();
    queue.enqueue(R);
    visited[R] = true;

    while (queue.isFull()) {
        const data = queue.dequeue();
        bfAnswer.push(data);
        for (const node of graph[data]) {
            if (visited[node] === false) {
                queue.enqueue(node);
                visited[node] = true;
            }
        }
    }
}

dfs(R, new Array(N + 1).fill(false), graph);
bfs(R, new Array(N + 1).fill(false), graph);

console.log(dfsAnswer.join(' '))
console.log(bfAnswer.join(' '))