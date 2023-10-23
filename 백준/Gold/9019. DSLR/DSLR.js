const fs = require('fs')


const [T, ...input] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');



const ans = [];
const arr = input.map(elem => elem.split(' ').map(Number));

for (let i = 0; i < arr.length; i++) {
    let current = 0;
    let [cur, tar] = arr[i];
    const queue = [[cur, '']]
    const visited = Array.from({length: 10001}, () => false);
    visited[cur] = true;
    let answer = '';
    while(queue.length !== current) {
        const [cur, oper] = queue[current];

        if (cur == tar) {
            answer = oper;
            break;
        }
        const D = (cur * 2) % 10000
        if (!visited[D]) {
            queue.push([D, oper + 'D']);
            visited[D] = true;
        }

        const S = (cur === 0 ? 9999 : cur - 1);
    
        if (!visited[S]) {
            queue.push([S,  oper + 'S']);
            visited[S] = true;
        }

        const L = (cur % 1000) * 10 + Math.floor(cur / 1000);
        if (!visited[L]) {
            queue.push([L, oper + 'L']);
            visited[L] = true;
        }

        const R = (cur % 10) * 1000 + Math.floor(cur / 10);
        if (!visited[R]) {
            queue.push([R, oper + 'R']);
            visited[R] = true;
        }

        current++;
    }

    ans.push(answer);

}

console.log(ans.join('\n'))