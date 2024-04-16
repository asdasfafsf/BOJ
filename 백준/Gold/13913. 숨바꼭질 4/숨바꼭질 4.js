const [N, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const visited = Array.from(Array(200001), () => [Infinity, Infinity]);

const queue = [[N, 0]];
visited[N] = [0, -1];


let current = 0;

while (queue.length !== current) {
    const [pointer, depth] = queue[current];
    const nextDepth = depth + 1;

    if (pointer === K) {
        break;
    }

    for (const nextPoint of [pointer * 2, pointer + 1, pointer - 1]) {
        if (nextPoint > 200000 || nextPoint < 0) {
            continue;
        }

        const [vDepth, vPrevious] = visited[nextPoint];

        if (vDepth > nextDepth) {
            visited[nextPoint] = [nextDepth, pointer]
            queue.push([nextPoint, nextDepth]);
        }
    }
  
    current++;
}


const answer = [K]
let val = visited[K]

while (val) {
    val = val[1]

    if (val === -1) {
        break;
    }

    answer.push(val);
    val = visited[val];
}

console.log(answer.length - 1)
console.log(answer.reverse().join(' '))