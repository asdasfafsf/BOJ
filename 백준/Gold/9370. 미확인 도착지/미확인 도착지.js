
class ProrityQueue {
    constructor() {
        this.heap = [null];
    }

    compare = (i, j) => {
        const [v1, w1] = this.heap[i];
        const [v2, w2] = this.heap[j];

        return w1 < w2;
    }

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue = (data) => {
        this.heap.push(data);

        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2)

        while(cur > 1 && this.compare(cur, par)) {
            this.swap(cur, par);

            cur = par;
            par = Math.floor(cur / 2)
        }
    }

    dequeue = () => {  
        const root = this.heap[1];

        if (this.heap.length <= 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = (cur * 2);
        let right = (cur * 2) + 1;

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


const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');



let T = +input[0];
let cur = 0;
const answer = [];
for(let tt = 0; tt < T; tt++) {
    const [n, m, t] = input[++cur].split(' ').map(Number);
    const [s, g, h] = input[++cur].split(' ').map(Number);

    const graph = Array.from({length: n + 1}, () => [])

    for (let i = 0; i < m; i++) {
        const [node1, node2, d] = input[++cur].split(' ').map(Number);
        let calD = d;

        if ((node1 === g && node2 === h) || (node2 === g && node1 === h)) {
            calD = calD - 0.1;
        }

        graph[node1].push([node2, calD]);
        graph[node2].push([node1, calD]);
    }

    const dest = [];

    for (let i = 0; i < t; i++) {
        dest.push(+input[++cur]);
    }
    dest.sort((a, b) => a - b);

   
    const visited = Array.from({length: n + 1}, () => false);
    const routes = Array.from({length: n + 1}, () => -1);
    const dist = Array.from({length: n + 1}, () => Infinity);
    const queue = new ProrityQueue();

    dist[s] = 0;
    queue.enqueue([s, 0]);

    while(queue.isFull()) {
        const [sNode, sData] = queue.dequeue();

        if (visited[sNode] === true) {
            continue;
        }

        for (const [dNode, dData] of graph[sNode]) {
            const newData = sData + dData;
            if (dist[dNode] > newData) {
                dist[dNode] = newData;
                queue.enqueue([dNode, newData])
                routes[dNode] = sNode;
            }
        }
    }

    const ans = dest.filter(elem => Math.floor(dist[elem]) !== dist[elem]);

    answer.push(ans.join(' ').trim());
}


console.log(answer.join('\n'));
