const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const map = new Map();

const gcd = (a, b) => {
    while (b !== 0) {
        const c = a % b;
        a = b;
        b = c;
    }
    return Math.abs(a);
}

for (let i = 1; i < input.length; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    if (x === 0 && y === 0) {
        continue;
    } else if (x === 0) {
        const key = y < 0 ? `(0, -1)` : `(0, 1)`;
        map.set(key, (map.get(key) || 0) + 1);
    } else if (y === 0) {
        const key = x < 0 ? `(-1, 0)` : `(1, 0)`;
        map.set(key, (map.get(key) || 0) + 1);
    } else {
        const val = gcd(x, y);
        const normalizedX = x / val;
        const normalizedY = y / val;
        const key = `(${normalizedX}, ${normalizedY})`;
        map.set(key, (map.get(key) || 0) + 1);
    }
}

const answer = [...map.values()].reduce((pv, cv) => Math.max(pv, cv), 0);
console.log(answer)