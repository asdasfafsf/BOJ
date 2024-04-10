class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    compare(i, j) {
        const [a, b] = [this.heap[i], this.heap[j]];

        return a[1] < b[1];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
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


        while ((left < this.heap.length && this.compare(left ,par))
        || (right < this.heap.length && this.compare(right, par))) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }

            this.swap(tmp, par);
            par = tmp;
            left = par * 2;
            right = par * 2 + 1;
        }

        return root;
    }

    peek() {
        return this.heap[1];
    }

    isFull() {
        return this.heap.length > 1;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

}

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


let index = -1;
let T = input[++index];

const answer = [];
while(T--) {
    const [n, d, c] = input[++index].split(' ').map(Number);
    const dist = Array.from(Array(n + 1), (_, i) => Infinity);
    const graph = Array.from(Array(n + 1), () => []);

    for (let i = 0; i < d; i++) {
        const [a, b, s] = input[++index].split(' ').map(Number);
        graph[b].push([a, s]);
    }

    const queue = new PriorityQueue();
    dist[c] = 0;
    queue.enqueue([c, 0]);


    while (queue.isFull()) {
        const [node, weight] = queue.dequeue();

        if (weight > dist[node]) {
            continue;
        }

        for (const [nextNode, nextWeight] of graph[node]) {
            if (dist[nextNode] > (nextWeight + weight)) {
                dist[nextNode] = nextWeight + weight;
                queue.enqueue([nextNode, dist[nextNode]]);
            }
        }
    }
 
    answer.push(`${(dist.reduce((pv, cv) => cv !== Infinity ? pv + 1 : pv, 0))} ${Math.max(...dist.filter(elem => elem !== Infinity))}`)
}

console.log(answer.join('\n'))



