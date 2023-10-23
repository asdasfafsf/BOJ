const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


let T = +input.at(0);
let cur = 0;
const answer = [];
while(T--) {
    const opers = input[++cur];
    const len = +input[++cur];

    const queue = JSON.parse(input[++cur]);

    let left = 0;
    let right = len
    let reverse = false;
    let isError = false;

    for (let i = 0; i < opers.length; i++) {
        const oper = opers.charAt(i);
        if (oper === 'R') {
            reverse = !reverse;
        } else if (oper === 'D') {
            if (reverse) {
                right--;
            } else {
                left++;
            }

            if (left > right) {
                isError = true;
                break;
            }
        } 
    }

    if (isError) {
        answer.push('error');
    } else {
        const ans = !reverse ? queue.slice(left, right) : queue.slice(left, right).reverse();

        answer.push(JSON.stringify(ans))
    }
}

console.log(answer.join('\n'))