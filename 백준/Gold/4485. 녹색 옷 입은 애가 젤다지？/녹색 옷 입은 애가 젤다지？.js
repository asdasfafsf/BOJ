class PriorityQueue {
    constructor() {
        this.heap = [null]
    }

    compare(a, b) {
        return this.heap[a][2] < this.heap[b][2];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
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
        while ((left < this.heap.length && this.compare(left, par)) || (right < this.heap.length && this.compare(right, par))) {
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

    isEmpty() { return this.heap.length === 1; }
    isFull() { return this.heap.length >= 2; }
    top() { return this.heap[1]; }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let index = 0;
    let problemNum = 1;
    while (input[index] != '0') {
        const T = Number(input[index++]);
        if (T === 0) break;
        
        const map = [];
        for (let i = 0; i < T; i++) {
            map.push(input[index++].split(' ').map(Number));
        }

        const dist = Array.from(Array(T), () => Array(T).fill(Infinity));
        dist[0][0] = map[0][0];
        
        const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        const queue = new PriorityQueue();
        queue.enqueue([0, 0, map[0][0]]);

        while (queue.isFull()) {
            const [y, x, d] = queue.dequeue();

            if (dist[y][x] < d) {
                continue;
            }

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + y, dx + x];

                if (ny >= T || ny < 0 || nx >= T || nx < 0) {
                    continue;
                }

                const nd = d + map[ny][nx];

                if (dist[ny][nx] > nd) {
                    dist[ny][nx] = nd;
                    queue.enqueue([ny, nx, nd]);
                }
            }
        }
        
        console.log(`Problem ${problemNum++}: ${dist[T - 1][T - 1]}`);
    }
    process.exit();
});