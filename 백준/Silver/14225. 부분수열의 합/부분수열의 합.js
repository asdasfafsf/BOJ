const [[N], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const visited = Array.from(Array(N + 1), () => false);
const results = Array.from(Array(2000000), () => false);

const recursion = (start, depth, value) => {
    results[value] = true;

    if (depth === N) {
        return;
    }

    for (let i = start; i < arr.length; i++) {
        if (visited[i] === false) {
            visited[i] = true;
            recursion(i + 1, depth + 1, value + arr[i]);
            visited[i] = false;
        }
    }
}


recursion(0, 0, 0);

let answer = 20000000;

for (let i = 1; i < results.length; i++) {
    if (results[i] === false) {
        answer = i;
        break;
    }
}

console.log(answer);