const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const N = +input[0];
const H = [0];

for (let i = 1; i <= N; i++) { 
    H.push(input[i]);
}

const check = Array(N + 2).fill(false);
const indexes = Array.from(Array(N), (_, k) => k + 1)  
    .sort((a, b) => H[a] - H[b]);

check[0] = check[N + 1] = true;
let answer = 1;
let current = 1;

for (let i = 0; i < N; i++) { 
    const index = indexes[i];
    current += 1 - Number(check[index - 1]) - Number(check[index + 1]);
    check[index] = true;
    
    if (i === N - 1 || H[index] !== H[indexes[i + 1]]) {
        answer = Math.max(answer, current);
    }
}

console.log(answer);