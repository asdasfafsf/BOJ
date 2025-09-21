const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

if (input.length === 0) process.exit(0);

const [N, M] = input[0].split(' ').map(Number);

if (!N || !M) process.exit(0);

for (let i = 1; i <= N && i < input.length; i++) {
    const line = input[i] || '';
    const padded = line.padEnd(M, '0').slice(0, M);
    console.log(padded.split('').reverse().join(''));
}