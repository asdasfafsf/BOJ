class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    compare(a, b) {
        return this.heap[a][1] < this.heap[b][1];
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
        if (this.isEmpty()) return null;

        const root = this.heap[1];
        if (this.heap.length === 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();
        let par = 1;
        let left = par * 2;
        let right = par * 2 + 1;

        while (
            (left < this.heap.length && this.compare(left, par))
            || (right < this.heap.length && this.compare(right, par))
        ) {
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

    isEmpty() {
        return this.heap.length === 1;
    }

    isFull() {
        return this.heap.length > 1;
    }
}

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M, 민겸, 시은] = input[0].split(' ').map(Number);
const graph = Array.from(Array(N + 1), () => []);

for (let i = 1; i < input.length; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);
    graph[s].push([e, w]);
    graph[e].push([s, w]);
}

const dist = Array(N + 1).fill(Infinity);
const paths = Array.from(Array(N + 1), () => []);
dist[민겸] = 0;

const q = new PriorityQueue();
q.enqueue([민겸, 0]);

while (!q.isEmpty()) {
    const [node, weight] = q.dequeue();

    if (dist[node] < weight) continue;

    for (const [nextNode, nextWeight] of graph[node]) {
        const newWeight = nextWeight + weight;

        if (newWeight < dist[nextNode]) {
            dist[nextNode] = newWeight;
            paths[nextNode] = [node];
            q.enqueue([nextNode, newWeight]);
        } else if (newWeight === dist[nextNode]) {
            paths[nextNode].push(node);
        }
    }
}

const stack = [시은];
const answer = [시은];
dist[시은] = Infinity
while (stack.length) {
    const node = stack.pop();

    for (const nextNode of paths[node]) {
        if (dist[nextNode] === Infinity) {
            continue;
        }

        dist[nextNode] = Infinity
        answer.push(nextNode);
        stack.push(nextNode);
    }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join(' '))