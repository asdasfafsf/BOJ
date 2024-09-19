
class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    compare(a, b) {
        const [aNode, aWeight, aTransfer] = this.heap[a];
        const [bNode, bWeight, bTransfer] = this.heap[b];

        if (aTransfer === bTransfer) {
            return aWeight < bWeight;
        }

        return aTransfer < bTransfer;
    }

    enqueue(data) {
        this.heap.push(data);

        let cur = this.heap.length - 1;
        let par = cur >> 1;

        while (cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = cur >> 1
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

        while(true) {
            let tmp = par;

            if (left < this.heap.length && this.compare(left, tmp)) {
                tmp = left;
            }

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }

            if (tmp === par) {
                break;
            }

            this.swap(tmp, par);
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


const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);

const C = [];

let index = 0;


for (let i = 0; i < N; i++) {
    C.push(+input[++index]);
}

const graph = Array.from(Array(N), () => [])

for (let y = 0; y < N; y++) {
    const arr = input[++index].split(' ').map(Number);

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] !== 0) {
            graph[y].push([x, arr[x]])
        }
    }
}

for (const nodes of graph) {
    nodes.sort((a, b) => a[1] - b[1]);
}


const dist = Array(N).fill(Infinity);
dist[0] = 0;
const transfers = Array(N).fill(Infinity);
transfers[0] = 0;

const queue = new PriorityQueue();
queue.enqueue([0, 0, 0])

while (queue.isFull()) {
    const [node, weight, transfer] = queue.dequeue();

    if (transfer > transfers[node]) {
        continue;
    } else if (transfer === transfers[node]) {
        if (weight > dist[node]) {
            continue;
        }
    }

    for (const [nextNode, nextWeight] of graph[node]) {
        const nextTransfer = (C[node] !== C[nextNode] ? 1 : 0) + transfer;
        
        if (transfers[nextNode] > nextTransfer) {
            queue.enqueue([nextNode, weight + nextWeight, nextTransfer]);
            dist[nextNode] = weight + nextWeight;
            transfers[nextNode] = nextTransfer;
        } else if (transfers[nextNode] === nextTransfer) {
            if (dist[nextNode] > (weight + nextWeight)) {
                queue.enqueue([nextNode, weight + nextWeight, nextTransfer]);
                dist[nextNode] = weight + nextWeight;
                transfers[nextNode] = nextTransfer;
            }
        }
    }
}

console.log(`${transfers[M]} ${dist[M]}`);
