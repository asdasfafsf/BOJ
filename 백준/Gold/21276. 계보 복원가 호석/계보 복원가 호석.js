const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const names = input[1].split(' ');
const graph = {};
names.forEach(elem => graph[elem] = [])

const weights = Object.fromEntries(names.map(elem => [elem, 0]));

for (let i = 3; i < input.length; i++) {
    const [child, parents] = input[i].split(' ');
    weights[child]++;
    graph[parents].push(child);
}


const queue = Object
    .entries(weights)
    .filter(([name, value]) => value === 0)
    .map(elem => elem[0]);

queue.sort((a, b) => a.localeCompare(b));
const answer = [queue.length, queue.join(' ')];

let current = 0;
const map = Object
    .fromEntries(names.map(elem => [elem, []]));

while (queue.length !== current) {
    const name = queue[current];

    for (const child of graph[name]) {
        weights[child]--;

        if (weights[child] === 0) {
            queue.push(child);
            map[name].push(child);
        }
    }

    current++;
}


const results = Object
    .entries(map)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(elem => {
        return `${elem[0]} ${elem[1].length} ${elem[1].join(' ')}`.trim()
    });

console.log(answer.join('\n'))
console.log(results.join('\n'))

