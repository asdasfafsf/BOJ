const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);


const answers = [];

for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = answers.length;
    
    const num = arr[i];

    while (left < right) {
        const mid = (left + right) >> 1;
        const midValue = answers[mid];
        
        if (midValue >= num) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    answers[right] = arr[i];
}
console.log(answers.length)