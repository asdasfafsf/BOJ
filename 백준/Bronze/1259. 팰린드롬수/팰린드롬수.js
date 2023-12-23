const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = [];


for (let i = 0; i < input.length - 1; i++) {
    const str = input[i];

    let left = 0;
    let right = str.length - 1;
    let result = 'yes';

    while (left <= right) {
        if (str.charAt(left) !== str.charAt(right)) {
            result = 'no';
            break;
        }

        left++;
        right--;
    }

    answer.push(result);
}

console.log(answer.join('\n'));