class ProrityQueue {

    constructor() {
        this.heap = [null];
    }


    compare = (i, j) => {
        const d1 = Math.abs(this.heap[i]);
        const d2 = Math.abs(this.heap[j]);

        if (d1 === d2) {
            return this.heap[i] < this.heap[j];
        }

        return d1 < d2
    }

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push = (data) => {
        this.heap.push(data);

        let cur = this.heap.length - 1; 
        let par = Math.floor(cur / 2);

        while(cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    pop = () => {
        const root = this.heap[1];

        if (this.heap.length <= 2) {
            this.heap = [null];
            return root;
        }

        let cur = 1;
        let left = cur * 2;
        let right = cur * 2 + 1;

        this.heap[1] = this.heap.pop();

        while( (left < this.heap.length && this.compare(left, cur))
             || (right < this.heap.length && this.compare(right, cur))) {

            let target = left

            if (this.heap[left] && this.heap[right]) {
                target = this.compare(left, right) ? left : right;
            }

            this.swap(target, cur);
            cur = target;

            left = cur * 2;
            right = cur * 2 + 1;
        }


        return root;
    }


    isEmpty = () => {
        return this.heap.length === 1;
    }

    isFull = () => {
        return !this.isEmpty()
    }

    peek = () => {
        return this.heap.at(-1);
    }
}


const fs = require('fs')
const [N, ...arr] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number)


const queue = new ProrityQueue();
const answer = [];

for (let i = 0; i < arr.length; i++) {
    const r = arr[i]

    if (r === 0) {
        if (queue.isEmpty()) {
            answer.push(0)
        } else {
            const pop = queue.pop();
            answer.push(pop == null ? 0 : pop);
        }
    } else {
        queue.push(r);
    }
}

console.log(answer.join('\n'));