const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const N = +input[0];

const graph = Array.from({length: N + 1}, () => []);

for (let i = 1 ; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    graph[start].push(end);
    graph[end].push(start);
}


const parents = Array.from({length: N + 1}, () => -1);
parents[1] = 1;


const recursion = current => {
    for (const next of graph[current]) {
        if (parents[next] === -1) {
            parents[next] = current;
            recursion(next);
        }
    }
}

recursion(1);

console.log(parents.slice(2).join('\n'))