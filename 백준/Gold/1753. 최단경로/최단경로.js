class ProrityQueue {

    constructor() {
        this.heap = [null];
    }

    compare = (i, j) => {
        const [v1, w1] = this.heap[i];
        const [v2, w2] = this.heap[j];

        return w1 < w2;
    }

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue = (data) => {
        this.heap.push(data);

        let cur = this.heap.length - 1; 
        let par = Math.floor(cur / 2);

        while(cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    dequeue = () => {
        const root = this.heap[1];

        if (this.heap.length <= 2) {
            this.heap = [null];
            return root;
        }

        let cur = 1;
        let left = cur * 2;
        let right = cur * 2 + 1;

        this.heap[1] = this.heap.pop();

        while( (left < this.heap.length && this.compare(left, cur))
             || (right < this.heap.length && this.compare(right, cur))) {

            let target = left

            if (this.heap[left] && this.heap[right]) {
                target = this.compare(left, right) ? left : right;
            }

            this.swap(target, cur);
            cur = target;

            left = cur * 2;
            right = cur * 2 + 1;
        }


        return root;
    }


    isEmpty = () => {
        return this.heap.length === 1;
    }

    isFull = () => {
        return this.heap.length > 1;
    }

    peek = () => {
        return this.heap.at(-1);
    }
}


const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    

const [V, E] = input[0].split(' ').map(Number);
const K = Number(input[1].trim());
const graph = Array.from({length : V + 1}, () => []);

for (let i = 2; i < input.length; i++) {
    const [u, v, w] = input[i].split(' ').map(Number);
    graph[u].push([v, w]);
}


const queue = new ProrityQueue();

const dist = Array.from({length: V + 1}, () => Infinity);
const visited = new Array(V + 1).fill(false);
dist[K] = 0;
queue.enqueue([K, 0]);

while(queue.isFull()) {
    const [v, w] = queue.dequeue();

    if (visited[v] === true) {
        continue;
    }

    visited[v] = true;
    for (const [v2, w2] of graph[v]) {
        if (dist[v2] > dist[v] + w2) {
            dist[v2] = dist[v] + w2;
            queue.enqueue([v2, dist[v2]]);
        }
    }
}   


const answer = dist.slice(1).map(d => {
    if (d === Infinity) {
        return 'INF'
    } else {
        return d;
    }
}).join('\n')

console.log(answer.trim());