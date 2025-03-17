class PriorityQueue {
    constructor(initialzer) {
        this.initialzer = initialzer ?? null
        this.heap = [this.initialzer];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    compare(a, b) {
        return this.heap[a] < this.heap[b];
    }

    enqueue(data) {
        this.heap.push(data);

        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);

        while (cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = cur >> 1;
        }
    }

    dequeue() {
        const root = this.heap[1];

        if (this.heap.length <= 2) {
            this.heap = [this.initialzer];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let par = 1;
        let left = par * 2;
        let right = par * 2 + 1;

        while ((left < this.heap.length && this.compare(left, par)
        || (right < this.heap.length && this.compare(right, par)))) {
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

    size() {
        return this.heap.length - 1;
    }

    peek() {
        return this.heap[1];
    }
}


const [[N], ...times] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


times.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    }

    return a[0] - b[0];
});


const queue = new PriorityQueue();
queue.enqueue(times[0][1]);
let answer = 1;
for (let i = 1; i < times.length; i++) {
    const [S, T] = times[i];

    while (queue.isFull()) {
        const end = queue.peek();

        if (end > S) {
            queue.enqueue(T);
            break;
        } else {
            queue.dequeue();
        }
    }


    answer = Math.max(answer, queue.size());
}

console.log(answer);