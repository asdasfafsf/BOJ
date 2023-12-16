const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input.shift();
const cards = input.shift().split(' ');
const map = {};

for (const card of cards) {
    map[card] = 1;
}

const M = +input.shift();

const answer = input
    .shift()
    .split(' ')
    .map(elem => map[elem] ?? '0');

console.log(answer.join(' '))