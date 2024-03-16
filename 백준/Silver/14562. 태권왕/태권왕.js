const [[C], ...testCases] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const answer = [];
for (const [S, T] of testCases) {

    const queue = [[S, T, 0]];
    let current = 0;
    let result = 99999;

    while (queue.length !== current) {

        const [cs, ct, cc] = queue[current];
        const nc = cc + 1;

        for (const [ns, nt] of [[cs + 1, ct],[cs * 2, ct + 3]]) {
            if (ns > nt) {
                continue;
            }
         
            if (ns === nt) {
                result = Math.min(result, nc);
                continue;
            }
            queue.push([ns, nt, nc]);
        }

 
        current++;
    }

    answer.push(result);
}

console.log(answer.join('\n'))