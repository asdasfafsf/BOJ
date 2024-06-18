const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = +input.shift();
const map = Array.from(Array(102), () => Array(102).fill(false));


const dp = [[0, 1], [-1, 0], [0, -1], [1, 0]];
for (let i = 0; i < input.length; i++) {
    let [x, y, d, g] = input[i].split(' ').map(Number);
    map[y][x] = true;

    const path = [d];
    for (let i = 0; i < g; i++) {
        for (let j = path.length - 1; j >= 0; j--) {
            path.push((path[j] + 1) % 4)
        }
    }

    for (const direction of path) {
        const [dy, dx] = dp[direction];
        [y, x] = [dy + y, dx + x];
        map[y][x] = true;  
    }

}

let answer = 0;
for (let y = 0; y < 101; y++) {
    for (let x = 0; x < 101; x++) {
        if (map[y][x] && map[y][x + 1] && map[y + 1][x] && map[y + 1][x + 1]) {
            answer++;
        }
    }
}

console.log(answer)