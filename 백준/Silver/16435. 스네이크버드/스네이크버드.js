const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


let [N, L] = input[0].split(' ').map(Number);
const fruits = input[1].split(' ').map(Number);
fruits.sort((a, b) => a - b);

for (let i = 0; i < fruits.length && N; i++) {

    if (fruits[i] <= L) {
        L++;
        N--;
    }
}

console.log(L)