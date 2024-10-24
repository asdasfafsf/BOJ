const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)


let T = +input[0];
let index = 0;

const answer = [];

while(T--) {
    const N = +input[++index];
    const arr = [];
    
    for (let i = 0; i < N; i++) {
        arr.push(+input[++index]);
    }
   
    
    let result = 0;

    for (let start = 0; start < N; start++) {
        const lis = [];
        for (let end = start; end < N; end++) {
            const current = arr[end];
            let left = 0;
            let right = lis.length;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (lis[mid] < current) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            if (left === lis.length) {
                lis.push(current);
            } else {
                lis[left] = current;
            }

            result += lis.length;
        }
    }

    answer.push(`Case #${answer.length + 1}: ${result}`);
}

console.log(answer.join('\n'))