const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



let T = +input[0];
let index = 0;
while (T--) {
    const [N, M] = input[++index].split(' ').map(Number);


    const graph = Array.from(Array(N), () => [])

    for (let i = 0; i < M; i++) {
        const [s, e, w] = input[++index].split(' ').map(Number);

        graph[s - 1].push([e - 1, w]);
        graph[e - 1].push([s - 1, w]);
    }

 
    const stack = [];
    const visited = Array(N).fill(false);
    stack.push([0, 0, Infinity])

    const recursion = (node, depth, value) => {
        visited[node] = true;

        let sum = 0;
        for (const [nextNode, nextWeight] of graph[node]) {
            if (visited[nextNode]) {
                continue;
            }

            // console.log(`${node} -> ${nextNode} w : ${nextWeight}`)
            
            sum += recursion(nextNode, depth + 1, nextWeight);
        }
        // console.log(`${node} -> sum : ${sum} value : ${value}`)

        sum = sum === 0 ? Infinity : sum;
        return Math.min(value, sum);
    }

    const answer = recursion(0, 0, Infinity);
    console.log(answer === Infinity ? 0 : answer);
}