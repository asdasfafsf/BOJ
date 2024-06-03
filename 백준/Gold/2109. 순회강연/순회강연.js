class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [a, b] = [this.heap[i], this.heap[j]];

        return a > b;
    }

    enqueue(data) {
        this.heap.push(data);

        let cur = this.heap.length -  1;
        let par = cur >> 1;

        while(cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = cur >> 1
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

    isFull() {
        return this.heap.length > 1;
    }

    isEmpty() {
        return this.heap.length === 1
    }
}


const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const N = +input[0];
const works = [];


let maxD = 0;
for (let i = 1; i < input.length; i++) {
    const [p, d] = input[i].split(' ').map(Number);
    maxD = Math.max(d, maxD);

    works.push([p, d]);
}

works.sort(([ap, ad], [bp, bd]) => {
    if (ad === bd) {
        return bp - ap;
    }

    return bd - ad;
});

const pq = new PriorityQueue();
let currentIndex = 0;
let answer = 0;
for (let day = maxD; day > 0; day--) {
    while (currentIndex < works.length) {
        const [p, d] = works[currentIndex];
        if (day <= d) {
            pq.enqueue(p);
        } else {
            break;
        }
        currentIndex++;
    }

    if (pq.isFull()) {
        const data = pq.dequeue();
        answer += data;
    }
}

console.log(answer)