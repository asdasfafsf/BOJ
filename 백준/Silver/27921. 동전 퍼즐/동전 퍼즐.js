const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

let index = 0;



let answer = 0
const [H1, W1] = input[index].split(' ').map(Number);
const coins1 = [];
for (let i = 0; i < H1; i++) {
    coins1.push(input[++index].split(''))
    answer += coins1.at(-1).reduce((pv, cv) => pv + (cv === 'O' ? 1 : 0), 0);
}

const [H2, W2] = input[++index].split(' ').map(Number);

const coins2 = [];
for (let i = 0; i < H2; i++) {
    coins2.push(input[++index].split(''))
}


let count = 0;

for (let h = -Math.max(H1, H2); h <= Math.max(H1, H2); h++) {
    for (let w = -Math.max(W1, W2); w <= Math.max(W1, W2); w++) {

        let current = 0;

        for (let x = 0; x <= Math.max(W1, W2); x++) {
            for (let y = 0; y <= Math.max(H1, H2); y++) {
                const [x1, y1] = [x, y];
                const [x2, y2] = [w + x, y + h];

                if (x1 >= 0 && x1 < W1 && y1 >= 0 && y1 < H1 && x2 >= 0 && x2 < W2 && y2 >= 0 && y2 < H2) {
                    if (coins1[y1][x1] === 'O' && coins2[y2][x2] === 'O') {
                        current++;
                    }
                }
            }
        }
        count = Math.max(current, count);
    }
}

console.log(answer - count)