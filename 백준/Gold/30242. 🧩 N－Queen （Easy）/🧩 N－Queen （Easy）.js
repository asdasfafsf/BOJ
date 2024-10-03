const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = +input[0];
const Q = input[1].split(' ').map(elem => elem - 1);
const nodes = [];

Q.forEach((elem, index) => (elem === -1 && nodes.push(index)))

const Y축과수평 = Array(N).fill(false);
const X축과수평 = Array(N).fill(false);
const 기울기양수 = new Map();
const 기울기음수 = new Map();


const update = (y, x) => {
    Y축과수평[y] = true;
    X축과수평[x] = true;
    기울기양수.set(y - x, true);
    기울기음수.set(y + x, true);
}

const clear = (y, x) => {
    Y축과수평[y] = false;
    X축과수평[x] = false;
    기울기양수.set(y - x, false);
    기울기음수.set(y + x, false);
}

const print = (y, x) => {
    console.log('Y축과수평:', Y축과수평[y]);
    console.log('X축과수평:', X축과수평[x]);
    console.log('기울기양수:', 기울기양수.get(y - x), ' (y - x =', y - x, ')');
    console.log('기울기음수:', 기울기음수.get(y + x), ' (y + x =', y + x, ')');
};
const isOk = (y, x) => !(Y축과수평[y] || X축과수평[x] || 기울기양수.get(y - x) || 기울기음수.get(y + x));


for (let i = 0; i < Q.length; i++) {
    if (Q[i] === -1) {
        continue;
    }

    update(i, Q[i]);
}

const recursion = (y, depth) => {
    if (depth === nodes.length) {
        console.log(Q.map(elem => elem + 1).join(' '));
        process.exit(0);
    }

    for (let x = 0; x < N; x++) {
        // console.log(y, x)
        // print(y, x)
        // console.log("\n\n")
        if (isOk(y, x)) {
            update(y, x);
            Q[y] = x;
            recursion(nodes[depth + 1], depth + 1);
            Q[y] = -1;
            clear(y, x);
        }
    }
}
if (nodes.length > 0) {
    recursion(nodes[0], 0);
    console.log(-1);
} else {
    console.log(Q.map(v => v + 1).join(' '));
}
