class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.value = data;
    }
}

class BST {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    compare(a, b) {
        const [aa, bb] = [infoMap[a.toString()], infoMap[b.toString()]];

        if (aa.L === bb.L) {
            return a - b;
        }

        return aa.L - bb.L;
    }

    insert(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            this.insertNode(new Node(data), this.head);
        }
        this.size++;
    }

    insertNode(target, parent) {
        if (!parent) {
            return target;
        }

        if (this.compare(target.value, parent.value) < 0) {
            parent.left = this.insertNode(target, parent.left);
        } else {
            parent.right = this.insertNode(target, parent.right);
        }

        return parent;
    }

    search(value) {
        return this.searchNode(value, this.head);
    }

    searchNode(value, node) {
        if (!node) {
            return null;
        }

        if (value === node.value) {
            return node;
        }

        if (this.compare(value, node.value) < 0) {
            return this.searchNode(value, node.left);
        } else {
            return this.searchNode(value, node.right);
        }
    }

    delete(value) {
        this.head = this.deleteNode(value, this.head);
        if (this.head !== null) {
            this.size--;
        }
    }

    deleteNode(value, node) {
        if (!node) {
            return null;
        }

        if (value === node.value) {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else {
                let target = node.left;
                while (target.right) {
                    target = target.right;
                }
                node.value = target.value;
                node.left = this.deleteNode(target.value, node.left);
                return node;
            }
        } else if (this.compare(value, node.value) < 0) {
            node.left = this.deleteNode(value, node.left);
        } else {
            node.right = this.deleteNode(value, node.right);
        }

        return node;
    }
}

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .toString()
    .split('\n');

const N = +input[0];
const infoMap = {};

const bst = new BST();
const gTreeMap = {};

for (let i = 1; i <= N; i++) {
    const [P, L, G] = input[i].split(' ').map(Number);
    infoMap[P] = { L, G };

    if (!gTreeMap[G]) {
        gTreeMap[G] = new BST();
    }
    gTreeMap[G].insert(P);
    bst.insert(P);
}

const Q = +input[N + 1];
const answer = [];

for (let i = N + 2; i < input.length; i++) {
    const queries = input[i].split(' ');
    const action = queries[0];

    if (action === 'recommend') {
        const [_, G, x] = queries.map(Number);
        const tree = gTreeMap[G];

        if (x === 1) {
            let node = tree.head;
            while (node.right) {
                node = node.right;
            }
            answer.push(node.value);
        } else {
            let node = tree.head;
            while (node.left) {
                node = node.left;
            }
            answer.push(node.value);
        }
    } else if (action === 'recommend2') {
        const [_, x] = queries.map(Number);

        if (x === 1) {
            let node = bst.head;
            while (node.right) {
                node = node.right;
            }
            answer.push(node.value);
        } else {
            let node = bst.head;
            while (node.left) {
                node = node.left;
            }
            answer.push(node.value);
        }
    } else if (action === 'recommend3') {
        const [_, x, L] = queries.map(Number);

        if (x === 1) {
            let node = bst.head;
            let best = null;
            while (node) {
                if (infoMap[node.value].L >= L) {
                    best = node;
                    node = node.left;
                } else {
                    node = node.right;
                }
            }
            answer.push(best ? best.value : -1);
        } else {
            let node = bst.head;
            let best = null;
            while (node) {
                if (infoMap[node.value].L < L) {
                    best = node;
                    node = node.right;
                } else {
                    node = node.left;
                }
            }
            answer.push(best ? best.value : -1);
        }
    } else if (action === 'add') {
        const [_, P, L, G] = queries.map(Number);
        infoMap[P] = { L, G };

        if (!gTreeMap[G]) {
            gTreeMap[G] = new BST();
        }
        gTreeMap[G].insert(P);
        bst.insert(P);
    } else if (action === 'solved') {
        const [_, P] = queries.map(Number);
        bst.delete(P);
        gTreeMap[infoMap[P].G].delete(P);
    }
}

console.log(answer.join('\n'));