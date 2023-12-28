class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [v1, w1] = this.heap[i];
        const [v2, w2] = this.heap[j];

        return w1 < w2;
    }

    enqueue(data) {
        this.heap.push(data);

        let current = this.heap.length - 1;
        let parent = current >> 1;

        while (current > 1 && this.compare(current, parent)) {
            this.swap(current, parent);
            current = parent;
            parent = current >> 1;
        }
    }
    
    dequeue() {
        const root = this.heap[1];

        if (this.heap.length < 3) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let current = 1;
        let left = current * 2;
        let right = current * 2 + 1;

        while (
            (left < this.heap.length && this.compare(left, current))
            || (right < this.heap.length && this.compare(right, current))
        ) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, left)) {
                tmp = right;
            }

            this.swap(tmp, current);
            current = tmp;
            left = current * 2;
            right = current * 2 + 1;
        }

        return root;
    }

    isFull() {
        return this.heap.length > 1;
    }
    
    isEmpty() {
        return this.heap.length === 1;
    }

}



const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, M] = [input[0], input[1]].map(Number);


const graph = Array.from({length: N + 1}, () => []);


for (let i = 2; i < input.length - 1; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);

    graph[s].push([e, w]);
}


const [s, e] = input.at(-1).split(' ').map(Number);


const dist = Array.from({length: N + 1}, () => Infinity);
const route = Array.from({length: N + 1}, () => -1);
const queue = new PriorityQueue();
queue.enqueue([s, 0]);
dist[s] = 0;


while (queue.isFull()) {
    const [node, weight] = queue.dequeue();

    if (dist[node] < weight) {
        continue;
    }

    for (const [nextNode, nextWeight] of graph[node]) {
        const newWeight = weight + nextWeight;

        if (newWeight < dist[nextNode]) {
            dist[nextNode] = newWeight;
            route[nextNode] = node;
            queue.enqueue([nextNode, newWeight]);
        }
    }
}


let count = 1;
let destination = e;
const path = [e];

while (destination !== s) {
    destination = route[destination];

    if (!destination) {
        break;
    }
    path.push(destination);
    count++;
}

console.log(dist[e]);
console.log(count);
console.log(path.reverse().join(' '));