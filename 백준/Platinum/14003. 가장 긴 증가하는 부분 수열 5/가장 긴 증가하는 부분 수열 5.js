const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);


const answers = [];
const indexes = [];


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
    indexes.push([right, arr[i]]);
}

const answer = Array.from({length: answers.length}, () => 0);
let current = answers.length - 1;

for (let i = indexes.length - 1; i >= 0; i--) {
    const [index, value] = indexes[i];

    if (current === index) {
        answer[index] = value;
        current--;
    }
}
console.log(answers.length);
console.log(answer.join(' '))