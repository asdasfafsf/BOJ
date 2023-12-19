class PriorityQueue {
    constructor() {
        this.heap = [null]
    }

    compare(i, j) {
        const [v1, w1] = this.heap[i];
        const [v2, w2] = this.heap[j];

        return w1 < w2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
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

        let parent = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;


        while (
            (left < this.heap.length && this.compare(left, parent))
            || (right < this.heap.length && this.compare(right, parent))
        ) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }

            this.swap(tmp, parent)
            parent = tmp;
            left = parent * 2;
            right = parent * 2 + 1;
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
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, M, X] = input[0].split(' ').map(Number);


const graph = Array.from({length: N + 1}, () => []);
const rGraph = Array.from({length: N + 1}, () => []);

for (let i = 1; i < input.length; i++) {
    const [start, dest, weight] = input[i].split(' ').map(Number);

    graph[start].push([dest, weight]);
    rGraph[dest].push([start, weight]);
}



const dks = (start, graph) => {
    const queue = new PriorityQueue();
    const dist = Array.from({length: N + 1}, () => Infinity);
    const visitied = Array.from({length: N + 1}, () => false);
    queue.enqueue([start, 0]);
    dist[start] = 0;

    while (queue.isFull()) {
        const [v, w] = queue.dequeue();

        for (const [tv, tw] of graph[v]) {
            if (dist[tv] > w + tw) {
                dist[tv] = w + tw;
                queue.enqueue([tv, dist[tv]])
            }
        }
    }

    return dist;
}


const destDist = dks(X, graph);
const reversedDist = dks(X, rGraph);

let answer = -1;
for (let i = 1; i < destDist.length; i++) {
    answer = Math.max(answer, (destDist[i] + reversedDist[i]) );
}

console.log(answer)