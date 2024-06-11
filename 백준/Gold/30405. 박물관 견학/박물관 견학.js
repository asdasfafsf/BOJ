
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


        while ((left < this.heap.length && this.compare(left, par))
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

    isFull() {
        return this.heap.length > 1;
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


const counts = []

for (let i = 1; i < input.length; i++) {
    const [k, ...p] = input[i].split(' ').map(Number);

    counts.push(p[0]);
    counts.push(p.at(-1));
}

counts.sort((a, b) => a - b);

console.log(counts[N - 1])
