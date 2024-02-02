class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }


    compare(i, j) {
        const [node1, weight1] = this.heap[i];
        const [node2, weight2] = this.heap[j];

        return weight1 < weight2;
    }

    enqueue(data) {
        this.heap.push(data);

        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);


        while (current > 1 && this.compare(current, parent)) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor(current / 2);
        }
    }

    dequeue() {
        const root = this.heap[1];

        if (this.heap.length <= 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let parent = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;

        while (
            (left < this.heap.length && this.compare(left, parent))
            || (right < this.heap.length && this.compare(right, parent))) {
            
            let tmp = left;

            if (right < this.heap.length && this.compare(right, tmp)) {
                tmp = right;
            }

            this.swap(tmp, parent);
            parent = tmp;
            left = parent * 2;
            right = parent * 2 + 1;
        }

        return root;
    }

    isFull() {
        return this.heap.length > 1;
    }

    isEmpty() {
        return this.heap.length === 1;
    }
}



const [[V, E], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const graph = Array.from({length: V + 1}, () => []);

for (const [s, e, w] of arr) {
    graph[s].push([e, w]);
    graph[e].push([s, w]);
}

const queue = new PriorityQueue();
const visit = Array.from({length: V + 1}, () => false);
visit[1] = true;

for (const [dest, weight] of graph[1]) {
    queue.enqueue([dest, weight]);
}


let answer = 0;

while(queue.isFull()) {
    const [node, weight] = queue.dequeue();
 
    if (visit[node] === true) {
        continue;
    }

    visit[node] = true;
    answer += weight

    for (const [nextNode, nextWeight] of graph[node]) {
        if (visit[nextNode] === false) {
            queue.enqueue([nextNode, nextWeight]);
        }
    }

}

console.log(answer)