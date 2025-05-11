class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    compare(a, b) {
        return this.heap[a][1] < this.heap[b][1];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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

        while ((left < this.heap.length && this.compare(left, par)) ||
            (right < this.heap.length && this.compare(right, par))) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, left)) {
                tmp = right;
            }

            this.swap(tmp, par);
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

    peek() {
        return this.heap[1];
    }
}

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


let index = 0;
const [n, m] = input[index++];
const graph = Array.from(Array(n + 1), () => []);

for (let i = 0; i < m; i++) {
    const [a, b, c] = input[index++];
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

const [p, q] = input[index++];
const houses = input[index++];

const stores = input[index++];

const dist = Array(n + 1).fill(Infinity);
const queue = new PriorityQueue();
for (const store of stores) {
    dist[store] = 0;
    queue.enqueue([store, 0]);
}

let answer = -1;
let current = Infinity;

while (queue.isFull()) {
    const [node, weight] = queue.dequeue();
    if (dist[node] < weight) {
        continue;
    }

    if (houses.includes(node)) {
        if (weight < current || (weight === current && node < answer)) {
            current = weight;
            answer = node;
        }
    }

    for (const [nextNode, nextWeight] of graph[node]) {
        const newWeight = weight + nextWeight;

        if (newWeight < dist[nextNode]) {
            dist[nextNode] = newWeight;
            queue.enqueue([nextNode, newWeight]);
        }
    }
}

console.log(answer);
