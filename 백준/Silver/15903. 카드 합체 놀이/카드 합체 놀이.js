class PriorityQueue {

    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [a, b] = [this.heap[i], this.heap[j]];

        return a < b;
    }

    enqueue (data) {
        this.heap.push(data);

        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);


        while(cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    dequeue () {
        const root = this.heap[1];

        if (this.heap.length < 3) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = (cur * 2);
        let right = (cur * 2) + 1;

        while( (left < this.heap.length && this.compare(left, cur))
        || (right < this.heap.length && this.compare(right, cur))) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }

            this.swap(cur, tmp);
            cur = tmp;
            left = (cur * 2);
            right = (cur * 2) + 1;
        }

        return root;
    }


    isEmpty () {
        return this.heap.length === 1;
    }

    isFull () {
        return this.heap.length !== 1
    }
}



const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(BigInt);

const priorityQueue = new PriorityQueue();

for (let i = 0; i < arr.length; i++) {
    priorityQueue.enqueue(arr[i]);
}

for (let i = 0; i < m; i++) {
    const sum = priorityQueue.dequeue() + priorityQueue.dequeue();
    priorityQueue.enqueue(sum);
    priorityQueue.enqueue(sum);
}

const answer = priorityQueue
    .heap
    .slice(1)
    .reduce((pv, cv) => pv + cv, 0n)
    .toString();
console.log(answer)