class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [no1, start1, end1] = this.heap[i];
        const [no2, start2, end2] = this.heap[j];
    
        return end1 < end2;
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

        if (this.heap.length < 2) {
            this.heap = [null];
            return root;
        }

        this.heap[1] = this.heap.pop();
        let parent = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;

        while (
            (left < this.heap.length && this.compare(left, parent))
            || (right < this.heap.length && this.compare(right, parent))
        ) {
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

    front() {
        return this.heap[1];
    }

    isFull() {
        return this.heap.length !== 1;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    length() {
        return this.heap.length - 1;
    }
}



const [[N], ...lectures] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



lectures.sort((a, b) => {
    const [no1, start1, end1] = a;
    const [no2, start2, end2] = b;

    if (start1 === start2) {
        return end1 - end2;
    }

    return start1 - start2;
})

// console.log(lectures)

let answer = 1;
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(lectures[0])

for (let i = 1; i < lectures.length; i++) {
    const [no, start, end] = lectures[i];
    priorityQueue.enqueue([no, start, end]);
    let [tNo, tStart, tEnd] = [];
    let count = -1;

    while (priorityQueue.front()[2] <= start) {
        [tNo, tStart, tEnd] = priorityQueue.dequeue();
        // console.log(`끝난 강의 ------ 시작시간 : ${tStart}  끝 시간 : ${tEnd}`)
        count++;
    }

    // priorityQueue.enqueue([tNo, tStart, tEnd])

    // console.log(`현재 강의는 ${start}시에 시작해서 ${end}시에 끝납니다.`)
    // console.log(priorityQueue.heap)
    // console.log('');
   
    answer = Math.max(answer, priorityQueue.length())
}

console.log(answer)