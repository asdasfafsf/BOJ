const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const N = +input.shift();
const M = +input.shift();

const brokenButtons = M === 0 ? [] : input.shift().split(' ').map(Number);
const buttons = [0,1,2,3,4,5,6,7,8,9].filter(elem => !brokenButtons.includes(elem));


let min = Math.abs(N - 100);

const dfs = (current, depth) => {
    min = Math.min(min, Math.abs(N - current) + depth);
    if (depth >= 7) {
        return;
    }

    for (let i = 0; i < buttons.length; i++) {
        dfs(current * 10 + buttons[i], depth + 1);
    }
}

for(let i = 0; i < buttons.length; i++) {
    dfs(buttons[i], 1);
}

console.log(min);
