
class Node {
    prev = null;
    next = null;
    constructor(value) {
      this.value = value;
    }
  }
class Deque {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push_front(value) {
      const newNode = new Node(value);
      if (this.empty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length += 1;
    }
    push_back(value) {
      const newNode = new Node(value);
      if (this.empty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length += 1;
    }
    pop_front() {
      if (this.empty()) return -1;
      const front = this.front();
      this.head = this.head.next;
      this.length -= 1;
      return front;
    }
    pop_back() {
      if (this.empty()) return -1;
      const back = this.back();
      this.tail = this.tail.prev;
      this.length -= 1;
      return back;
    }
    size() {
      return this.length;
    }
    empty() {
      return this.length === 0 ? 1 : 0;
    }
    front() {
      if (this.empty()) return -1;
      return this.head.value;
    }
    back() {
      if (this.empty()) return -1;
      return this.tail.value;
    }
  }

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = Number(input[0].trim());
const A = input[1].split(' ').map(elem => Number(elem.trim()));

const fq = []
let left = -1;
let right = N;
const bq = [];
let count = 1;

const dq = new Deque();

for (let i = A.length - 1; i >= 0; i--) {
    const a = A[i];

    if (a === 1) {
        dq.push_front(count);
    } else if (a === 2) {
        const f = dq.pop_front();
        dq.push_front(count);
        if (f !== -1) {
            dq.push_front(f);
        }
    } else {
        dq.push_back(count);
    }

    count++;
}

const answer = [];

while (!dq.empty()) {
    answer.push(dq.pop_front())
}
console.log(answer.join(' '))