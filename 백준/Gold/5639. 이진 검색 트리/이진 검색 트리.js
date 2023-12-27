const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);


const answer = [];

function postOrder(start, end) {
    if (start >= end) {
        return;
    }

    if (start == end - 1) {
        answer.push(input[start]);
        return;
    }

    let right = start + 1;

    while (right < end) {
        if (input[start] < input[right]) {
            break;
        }
        right++;
    }

    postOrder(start + 1, right);
    postOrder(right, end);
     
    answer.push(input[start]);
}


postOrder(0, input.length);

console.log(answer.join('\n'));