class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    compare(a, b) {
        [a, b] = [this.heap[a], this.heap[b]];

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
        
        let cur = 1;
        let left = cur * 2;
        let right = cur * 2 + 1;

        while ((left < this.heap.length && this.compare(left, cur))
        || (right < this.heap.length && this.compare(right, cur))) {
            tmp = left;
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

    peek() {
        return this.heap[1]
    }
}

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const bridges = [];
const [s, e] = input.at(-1).split(' ').map(Number);
for (let i = 1; i < input.length - 1; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);

    bridges.push([s, e, w]);
}


bridges.sort((a, b) => b[2] - a[2]);

const parents = Array.from(Array(N + 1), (_, k) => k);

const find = a => {
    if (a === parents[a]) {
        return a;
    }

    return parents[a] = find(parents[a]);
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}

let answer = Infinity;
for (const [a, b, w] of bridges) {
    if (find(a) === find(b)) {
        continue;
    }

    union(a, b);
    answer = Math.min(answer, w);

    if (find(s) === find(e)) {
        break;
    }
}
console.log(answer)