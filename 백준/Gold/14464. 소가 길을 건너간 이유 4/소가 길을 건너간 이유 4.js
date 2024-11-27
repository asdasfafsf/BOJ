class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }

    compare(a, b) {
        [a, b] = [this.heap[a], this.heap[b]];

        if (a[1] === b[1]) {
            return a[0] < b[0];
        }

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

    dequeue () {
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

    isFull () {
        return this.heap.length >= 2;
    }

    peek () {
        return this.heap[1];
    }

    isEmpty() {
        return this.heap.length === 1;
    }


}

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [C, N] = input[0].split(' ').map(Number);

const chickens = [];
for (let i = 1; i <= C; i++) {
    chickens.push(+input[i]);
}

chickens.sort((a, b) => a - b);

const cows = [];

for (let i = C + 1; i < C + 1 + N; i++) {
    cows.push(input[i].split(' ').map(Number));
}

cows.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
})


const pq = new PriorityQueue();
let cowIndex = 0;
let answer = 0;
for (const chicken of chickens) {

    // console.log(`현재 치킨 : ${chicken}`)
    while (cows[cowIndex]) {
        const [s, e] = cows[cowIndex];

        if (chicken >= s && chicken <= e) {
            pq.enqueue([s, e]);
            cowIndex++;
        } else if (chicken > e) {
            cowIndex++;
        } else if (chicken < s){
            break;
        }
    }

    // console.log(pq.heap)
    while (pq.isFull()) {
        const [s, e] = pq.dequeue();
        // console.log(s, e, chicken)
        if (chicken >= s && chicken <= e) {
            // console.log('더해용~')
            answer++;
            break;
        }
    }
}

console.log(answer)