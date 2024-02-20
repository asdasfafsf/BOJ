const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



const answers = [];

const recursion = (start, end, str) => {
    if (start >= end) {
        return true;
    }

    const mid = (start + end) >> 1;

    let left = start;
    let right = end;

    while (left < right) {
        if (str.charAt(left) === str.charAt(right)) {
            return false;
        } else {
            left++;
            right--;
        }
    }
 
    return recursion(start, mid - 1, str) && recursion(mid + 1, end, str);
}

for (let i = 1; i < input.length; i++) {
    const testCase = input[i];
    let left = 0;
    let right = testCase.length;

    const result = recursion(left, right - 1, testCase) ? 'YES' :  'NO';

    answers.push(result);
}

console.log(answers.join('\n'));