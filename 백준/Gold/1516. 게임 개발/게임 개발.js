class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [a, b] = [this.heap[i], this.heap[j]];

        return a[1] < b[1];
    }

    enqueue(data) {
        this.heap.push(data);

        let cur = this.heap.length - 1;
        let par = cur >> 1;

        while (cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = cur >> 1;
        }
    }

    dequeue() {
        const root = this.heap[1];

        if (this.heap.length <= 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let par = 1;
        let left = par * 2;
        let right = par * 2 + 1;


        while (( left < this.heap.length && this.compare(left, par))
        || (right < this.heap.length && this.compare(right, par))) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }
            this.swap(par, tmp);
            par = tmp;
            left = par * 2;
            right = par * 2 + 1;
        }

        return root;
    }

    isFull() {
        return this.heap.length >= 2;
    }

    isEmpty() {
        return this.heap.length === 1;
    }
}


const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const ind = Array(N + 1).fill(0);
const dist = Array.from(N + 1).fill(0);
const graph = Array.from(Array(N + 1), () => []);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const time = element[0];

    for (let j = 1; j < element.length - 1; j++) {
        ind[i + 1]++;

        graph[element[j]].push([i + 1, time]);
    }
 
    dist[i + 1] = time;
}


const queue = new PriorityQueue();

for (let i = 1; i <= N; i++) {
    if (ind[i] === 0) {
        queue.enqueue([i, dist[i]])
    }
}


let current = 0;

while (queue.isFull()) {
    const [node, time] = queue.dequeue();

    for (const [nextNode, nextTime] of graph[node]) {
        ind[nextNode]--;

        if (ind[nextNode] === 0) {
            queue.enqueue([nextNode, nextTime + time]);
            dist[nextNode] = nextTime + time;
        }
    }

    current++;
}

console.log(dist.slice(1).join('\n'));