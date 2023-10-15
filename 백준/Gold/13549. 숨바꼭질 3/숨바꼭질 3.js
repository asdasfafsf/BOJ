
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim();

const [N, K] = input.split(' ').map(Number);
const dist = Array.from({length: 100002}, () => 100001);


const dequeue = []
dist[N] = 0;
dequeue.push(N);


while(dequeue.length) {
    const cur = dequeue.shift();
    const curDist = dist[cur];

    if (cur === K) {
        break;
    }

    for (const next of [cur * 2, cur - 1, cur + 1]) {
        if (dist[next] === 100001 && next >= 0 && next < 100001) {
            if (next === cur * 2 && dist[next] > curDist) {
                dequeue.unshift(next);
                dist[next] = curDist;
            } else if (dist[next] > curDist + 1){
                dequeue.push(next)
                dist[next] = curDist + 1;   
            }
        }
    }
}

console.log(dist[K]);