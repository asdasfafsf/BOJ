const fs = require('fs')


const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

let T = +input.at(0);
let cur = 0;
const answer = [];

while(T--) {
    const n = +input[++cur];
    const map = {};

    for (let i = 0; i < n; i++) {
        const [v, k] = input[++cur].split(' ');
        
        if (!map[k]) {
            map[k] = []
        }

        map[k].push(v);
    }

    const ans = Object.entries(map)
        .map(([k, v]) => v.length)
        .reduce((pv, cv) => pv * (cv + 1), 1) - 1;
  
    answer.push(ans);
}
console.log(answer.join('\n'))