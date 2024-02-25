class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        return this.heap[i] > this.heap[j]
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

        let cur = 1;
        let left = cur * 2;
        let right = cur * 2 + 1;

        while(
            (left < this.heap.length && this.compare(left ,cur))
            || (right < this.heap.length && this.compare(right, cur))
        ) {
            let tmp = left;

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }

            this.swap(tmp, cur);
            cur = tmp;
            left = cur * 2;
            right = cur * 2 + 1;
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

const [[N, K, T], [...sharks]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(BigInt));


sharks.sort((a, b) => Number(a - b));
const queue = new PriorityQueue();

let start = 0;

for (;start < sharks.length; start++) {
    const shark = sharks[start];
    if (shark < T) {
        queue.enqueue(shark);
    } else {
        break;
    }
}

let current = 0n;
let answer = T;
while (current < K && queue.isFull()) {
    const shark = queue.dequeue();
    answer += shark;
    current += 1n;

    for (; start < sharks.length; start++) {
        if (sharks[start] < answer) {
            queue.enqueue(sharks[start])
        } else {
            break;
        }
    }

}

console.log(answer.toString())