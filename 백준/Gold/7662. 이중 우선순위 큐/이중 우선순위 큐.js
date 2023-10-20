const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

class ProrityQueue {
    constructor(max = true) {
        this.heap = [null];
        this.max = max
    }

    compare = (i, j) => {
        return this.max ? this.heap[i] > this.heap[j] : this.heap[i] < this.heap[j];
    }

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue = (data) => {
        this.heap.push(data);

        let cur = this.heap.length - 1; 
        let par = Math.floor(cur / 2);

        while(cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    dequeue = () => {
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
        return this.heap.length > 1;
    }

    peek = () => {
        return this.heap.at(-1);
    }
}

const answer = [];
const T = +input[0];
let cur = 0;
for (let t = 0; t < T; t++) {
    const minQueue = new ProrityQueue(false);
    const maxQueue = new ProrityQueue(true);

    const minCache = {};
    const maxCache = {};

    const N = +input[++cur];

    cur++;
    for(let i = 0; i < N; i++) {
        const elem = input[i + cur].split(' ');
        const oper = elem[0];
        const pr = +elem[1];

        if (oper === 'I') {
            minQueue.enqueue(pr);
            maxQueue.enqueue(pr);
        } else if (oper === 'D') {
            if (pr === -1) {
                let data = minQueue.dequeue();

                while(typeof data !== 'undefined' && minCache[data]) {
                    minCache[data]--;
                    data = minQueue.dequeue();
                }
                maxCache[data] ? maxCache[data]++ : maxCache[data] = 1;
            } else {
                let data = maxQueue.dequeue();

                while(typeof data !== 'undefined' && maxCache[data]) {
                    maxCache[data]--;
                    data = maxQueue.dequeue();
                }
                minCache[data] ? minCache[data]++ : minCache[data] = 1;
            }
        }
    }

    let minData = minQueue.dequeue();


    while(typeof minData !== 'undefined' && minCache[minData]) {
        minCache[minData]--;
        minData = minQueue.dequeue();
    }

    let maxData = maxQueue.dequeue();

    while(typeof maxData !== 'undefined' && maxCache[maxData]) {
        maxCache[maxData]--;
        maxData = maxQueue.dequeue();
    }

    if (typeof maxData === 'undefined') {
        answer.push('EMPTY')
    } else {
        answer.push(`${maxData} ${minData}`);
    }
    cur += N - 1;
}

console.log(answer.join('\n'));