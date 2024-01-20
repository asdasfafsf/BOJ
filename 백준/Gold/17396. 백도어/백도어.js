
class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [v1, w1] = this.heap[i];
        const [v2, w2] = this.heap[j];

        return w1 < w2;
    }

    enqueue(data) {
        this.heap.push(data);

        let current = this.heap.length - 1;
        let parent = current >> 1;

        while (current > 1 && this.compare(current, parent)) {
            this.swap(current, parent);
            current = parent;
            parent = current >> 1;
        }
    }

    dequeue() {
        const root = this.heap[1];

        if (this.heap.length === 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = cur * 2;
        let right = cur * 2 + 1;

        while(
            (left < this.heap.length && this.compare(left, cur))
            || (right < this.heap.length && this.compare(right, cur))
        ) {
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
        this.heap.length === 1;
    }
}


const [[N, M] , views, ...roads] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const graph = Array.from({length: N}, () => []);
const startPoints = [];

for (let i = 0; i < roads.length; i++) {
    const [s, e, w] = roads[i];

    graph[s].push([e, BigInt(w)]);
    graph[e].push([s, BigInt(w)]);

    if (s === N - 1) {
        startPoints.push(e)
    } else if (e === N - 1) {
        startPoints.push(s);
    }
}



const dks = (start, ignoreWatch) => {
    const dist = Array.from({length: N}, () => Infinity);
    const queue = new PriorityQueue();
    queue.enqueue([start, 0n]);
    dist[start] = 0n;
    

    while (queue.isFull()) {
        const [v, w] = queue.dequeue();

        if (dist[v] < w) {
            continue;
        }

        for (const [nextNode, weight] of graph[v]) {
            const nextWeight = weight + w;

            if (!ignoreWatch) {
                if (views[nextNode]) {
                    continue;
                }
            } else {
                if (views[nextNode] && nextNode !== N - 1) {
                    continue;
                }
            }

            if ((dist[nextNode] > nextWeight)) {
                queue.enqueue([nextNode, nextWeight]);
                dist[nextNode] = nextWeight;
            }
            
        }
    }

    return dist;
}

const zeroDists = dks(0, false);
const answer = startPoints
    .filter(elem => zeroDists[elem] !== Infinity)
    .map(elem => zeroDists[elem] + dks(elem, true)[N - 1])
    .reduce((pv, cv) => pv > cv ? cv : pv, Infinity);


console.log( (answer === Infinity ? -1 : answer).toString())