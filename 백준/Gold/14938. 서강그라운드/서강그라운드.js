class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    compare(i, j) {
        const [v1, w1] = this.heap[i];
        const [v2, w2] = this.heap[j];

        return w1 < w2;
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

        if (this.heap.length === 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let parent = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;


        while ((left < this.heap.length && this.compare(left, parent))
            || (right < this.heap.length && this.compare(right, parent))) {

            let temp = left;

            if (right < this.heap.length && this.compare(right, temp)) {
                temp = right;
            }

            this.swap(temp, parent);
            parent = temp;
            left = parent * 2;
            right = parent * 2 + 1;
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
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [n, m, r] = input[0].split(' ').map(Number);
const items = [0, ...input[1].split(' ').map(Number)];

const graph = Array.from({length: n + 1}, () => []);

for (let i = 2; i < input.length; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);
    graph[s].push([e, w]);
    graph[e].push([s, w]);
}


const answer = Array.from({length: n}, () => 0)
    .map((elem, index) => index + 1)
    .map(start => {
        const priorityQueue = new PriorityQueue();
        priorityQueue.enqueue([start, 0]);
        const dist = Array.from({length: n + 1}, () => Infinity);
        dist[start] = 0;

        while (priorityQueue.isFull()) {
            const [node, weight] = priorityQueue.dequeue();

            if (dist[node] < weight) {
                continue;
            }

            for (const [nextNode, nextWeight] of graph[node]) {
                const weightSum = weight + nextWeight;
          
                if (weightSum < dist[nextNode]) {
                    dist[nextNode] = weightSum;
                    priorityQueue.enqueue([nextNode, weightSum]);
                }
            }
        }

        return dist.reduce((pv, cv, index) => cv > m ? pv : pv + items[index], 0)
    }).reduce((pv, cv) => Math.max(pv, cv), 0);


console.log(answer);