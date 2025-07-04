const [[N, K], S] = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

let left = 0;
let right = 0;
let count = 0;
let answer = 0;
let result = 0;

while (right < N) {
    if (S[right] % 2 === 0) {
        answer++;
        right++;
    } else {
        if (count < K) {
            count++;
            right++;
        } else {
            if (S[left] % 2 === 1) count--;
            else answer--;
            left++;
        }
    }

    result = Math.max(result, answer);
}

console.log(result);