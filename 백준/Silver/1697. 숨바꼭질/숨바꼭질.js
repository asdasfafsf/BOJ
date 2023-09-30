const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim();

const [N, K] = input.split(' ').map(Number);



const visited = new Array(100001).fill(0);
const queue = []
queue.push(N);
visited[N] = 1;

while(queue.length) {
    const data = queue.shift();
    if (data === K) {
        break;
    }
    for (const next of [data * 2, data + 1, data - 1]) {
        if (next < 100001 && next > -1 && visited[next] === 0) {
            visited[next] = visited[data] + 1;
            queue.push(next);
        }
    }

}
console.log(visited[K] - 1)