class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    compare(a, b) {
        return this.heap[a][0] < this.heap[b][0];
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
        return this.heap.length >= 2;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    peek() {
        return this.heap[1];
    }
}


const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


let [N, M] = input[0].split(' ').map(Number);
const pq = new PriorityQueue();
for (let i = 1; i <= N; i++) {
    let [d, p, t, e] = input[i].split(' ').map(Number);

    if (t === 1) {
        p = 0;
    }
    if (e === 1) {
        pq.enqueue([(d >> 1) + (d % 2), p >> 1])
    } else {
        pq.enqueue([d, p]);
    }
}

let [HD, HP] = input.at(-1).split(' ').map(Number);

const pq2 = new PriorityQueue();
pq2.compare = function (a, b) {
    return this.heap[a] < this.heap[b];
}
let answer = 0;
while (M--) {
    while (pq.isFull() && pq.peek()[0] <= HD) {
        pq2.enqueue(pq.dequeue()[1]);
    }

    if (pq2.isEmpty()) {
        console.log(-1);
        process.exit(0);
    }
    

    const p = pq2.dequeue();

    if (p > HP) {
        answer += (p - HP);
    }
    HD++;
    HP++;
}

console.log(answer)