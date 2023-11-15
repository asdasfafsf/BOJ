class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    compare(i, j) {
        const a = this.heap[i];
        const b = this.heap[j];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    enqueue(data) {
        this.heap.push(data);
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);

        while (cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);
            cur = par;
            par = Math.floor(cur / 2);
        }   
    }

    dequeue() {
        const root = this.heap[1];

        if (this.heap.length < 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();
        
        let par = 1;
        let left = par * 2;
        let right = par * 2 + 1;

        while (
            (left < this.heap.length && this.compare(left, par))
            || (right < this.heap.length && this.compare(right, par))
        ) {
            let target = left;

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

    isEmpty() {
        return this.heap.length === 1;
    }

    isFull() {
        return this.heap.length > 1;
    }
}



const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const [N, D] = input[0].split(' ').map(Number);
const arr = input
    .slice(1)
    .map(elem => elem.split(' ').map(Number))
    .filter(([s, d, w]) => d - s > w && d <= D);


const graph = Array.from({length: D + 1}, () => []);

for (let i = 0; i < arr.length; i++) {
    const [s, d, w] = arr[i];
    graph[d].push([s, w]);
}

const dp = Array.from({length: D}, () => 0).map((elem, index) => index);
for (let i = 1; i <= D; i++) {
    const dests = graph[i];
    dp[i] = dp[i - 1] + 1;

    for (let j = 0; j < dests.length; j++) {
        const [s, w] = dests[j];
        dp[i] = Math.min(w + dp[s], dp[i])
    }
    
}

console.log(dp.at(-1))

