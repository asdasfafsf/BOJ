class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [m1, v1] = this.heap[i];
        const [m2, v2] = this.heap[j];

        if (v1 === v2) {
            return m1 > m2
        }

        return v1 > v2
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

        if (this.heap.length < 3) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();
        let par = 1;
        let left = par * 2;
        let right = par * 2 + 1;

        while(
            (left < this.heap.length && this.compare(left, par))
            || (right < this.heap.length && this.compare(right, par))
        ) {
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


let index = 0;
const [N, K] = input[index].split(' ').map(Number);
const jewels = [];

for (let i = 0; i < N; i++) {
    jewels.push(input[++index].split(' ').map(Number));
}

jewels.sort((a, b) => a[0] - b[0]);

const maxWeights = [];
for (let i = 0; i < K; i++) {
    maxWeights.push(+input[++index])
}

maxWeights.sort((a, b) => a - b);

let answer = 0;
let start = 0;

const jewelQueue = new PriorityQueue();

for (const maxWeight of maxWeights) {
    for (;start < jewels.length; start++) {
        const [m, v] = jewels[start];

        if (maxWeight < m) {
            break;
        }

        jewelQueue.enqueue([m, v]);
    }

    if (jewelQueue.isFull()) {
        const [m, v] = jewelQueue.dequeue();
        answer += v;
    }
}
console.log(answer)