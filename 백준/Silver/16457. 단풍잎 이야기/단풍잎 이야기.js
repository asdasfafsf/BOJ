

const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')



const [n, m, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));

const keys = Array.from({length: n * 2}, () => false).map((elem, index) => index + 1);

let max = 0;
const visited = Array.from({length: 2 * n + 1}, () => false);
const recursion = (start, depth, cache) => {
    if (depth === n) {    
        let ans = 0;
        for (let i = 0; i < arr.length; i++) {
            let isPossible = true;
            for (let j = 0; j < arr[i].length; j++) {
                const skill = arr[i][j];
                if (!visited[skill]) {
                    isPossible = false;
                    break;
                }
            }
            if (isPossible) {
                ans++;
            }
        }   
        max = Math.max(ans, max)
        return;
    }


    for (let i = start; i < keys.length; i++) {
        const key = keys[i];
        visited[key] = true;
        recursion(i + 1, depth + 1, []);
        visited[key] = false;
    }
}

for (let i = 0; i < keys.length; i++) {
    recursion(i, 0, []);
}
console.log(max)