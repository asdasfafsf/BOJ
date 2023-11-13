const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const N = +input[0]
const T = +input[1]
const arr = input[2].split(' ').map(Number);

let answer = [];

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const idx = answer.findIndex(elem => num === elem[0]);

    if (idx > -1) {
        answer[idx] = ([num, answer[idx][1], answer[idx][2] + 1]);
    } else if (answer.length === N) {
        answer.sort(([aNum, aPriority, aCount], [bNum, bPriority, bCount]) => {
            if (aCount === bCount) {
                return aPriority - bPriority;
            }
            return aCount - bCount;
        })
        answer[0] = [num, i, 1];
    } else {
        answer.push([num, i, 1]);
    }
}

console.log(answer.map(elem => elem[0]).sort((a, b) => a - b).join(' '))