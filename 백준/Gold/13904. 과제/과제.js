class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [a, b] = [this.heap[i], this.heap[j]];

        // if (a[0] === b[0]) {
        //     return a[1] > b[1];
        // }

        return a > b;
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

        while((left < this.heap.length && this.compare(left, par))
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

    peek() {
        return this.heap[1];
    }
}


const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const homeworks = [];

for (let i = 1; i < input.length; i++) {
    const [d, w] = input[i].split(' ').map(Number);

    homeworks.push([d, w]);
}

homeworks.sort((a, b) => {
    if (a[0] === b[0]) {
        return b[1] - a[1];
    }

    return b[0] - a[0];
})

const queue = new PriorityQueue();

let maxDay = homeworks[0][0];
let startIndex = 0;
let answer = 0;

for (let day = maxDay; day >= 0; day--) {
    for (let i = startIndex; i < homeworks.length; i++) {
        if (homeworks[i][0] <= day) {
            continue;
        }

        startIndex = i + 1;
        queue.enqueue(homeworks[i][1])
    }

    if (queue.isFull()) {
        answer += queue.dequeue();
    }
}
console.log(answer);


