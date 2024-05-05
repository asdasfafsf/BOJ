class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [a, b] = [this.heap[i], this.heap[j]];

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

        return;
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

    peek() {
        return this.heap[1];
    }
}


const [[N], ...historys] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


historys.sort((a, b) => a[0] - b[0]);

const answer = [];
const queue = new PriorityQueue();
const roomQueue = new PriorityQueue();
roomQueue.compare = function (i, j) {
    return this.heap[i] < this.heap[j];
}.bind(roomQueue)

queue.enqueue([answer.length, historys[0][1]]);
answer.push(1);

for (let i = 1; i < historys.length; i++) {
    const history = historys[i]

    while (queue.isFull()) {
        const [no, endTime] = queue.peek();
        if (endTime < history[0]) {
            queue.dequeue();
            roomQueue.enqueue(no);
        } else {
            break;
        }
    }
    
    let nextRoomNo = (roomQueue.isFull() ? roomQueue.dequeue() : answer.length);
    queue.enqueue([nextRoomNo, history[1]]);

    if (!answer[nextRoomNo]) {
        answer[nextRoomNo] = 0;
    }
    answer[nextRoomNo]++;

}

console.log(answer.length)
console.log(answer.join(' '))