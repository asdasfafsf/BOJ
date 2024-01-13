const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();


const indexes = [];
const stack = [];

for (let i = 0; i < input.length; i++) {
    const str = input.charAt(i);

    if (str === '(') {
        stack.push(indexes.length);
        indexes.push([i]);
    } else if (str === ')') {
        const targetIndex = stack.pop();
        indexes[targetIndex].push(i)
    }
}


const visited = Array.from({length: 201}, () => false);
const count = indexes.length;
const answer = [];

const recursion = (depth, start, paths) => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (visited[i] === false) {
            result += input.charAt(i);
        }
    }

    answer.push(result);

    if (depth === count) {
        return;
    }

    for (let i = start; i < count; i++) {
        const [start, end] = indexes[i];
        visited[start] = true;
        visited[end] = true;
        recursion(depth + 1, i + 1);
        visited[start] = false;
        visited[end] = false;
    }
} 

recursion(0, 0)
console.log([...new Set(answer.slice(1))].sort().join('\n'))