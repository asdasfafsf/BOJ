const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [K, L, N] = input[0].split(' ').map(Number);
const list = input[1];

let usageTime = 0;
let idleTime = 0;
let inUse = false;
const answer = [];

for (let i = 0; i < N; i++) {
    if (list[i] === '1') {
        usageTime++;
        idleTime = 0;
        if (!inUse && usageTime >= K) {
            inUse = true;
        }
    } else {
        if (inUse) {
            idleTime++;
            if (idleTime === L) {
                answer.push(i + 1); 
                inUse = false;
                usageTime = 0;
                idleTime = 0;
            }
        } else {
            usageTime = 0;
        }
    }
}

if (inUse && idleTime < L) {
    answer.push(N + L); 
}

if (answer.length === 0) {
    console.log('NIKAD');
} else {
    console.log(answer.join('\n'));
}