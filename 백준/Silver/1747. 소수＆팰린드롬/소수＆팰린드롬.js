
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const N = +input;

const primeNums = [0, 0];

for (let i = 2; i <= 15000; i++) {
    if (primeNums[i] === 0) {
         continue;
    }

    primeNums[i] = 1;
    for (let j = i + i; j < 1500000; j += i) {
        primeNums[j] = 0;
    }
}

let answer = 0;
for (let i = N; i < 1500000; i++) {
    if (primeNums[i] === 0) {
        continue;
    } 

    let isPal = true;
    const str = i.toString();

    let left = 0;
    let right = str.length  - 1;
    while (left < right) {
        if (str.charAt(left) === str.charAt(right)) {
            left++;
            right--;
        } else {
            isPal = false;
            break;
        }
    }


    if (isPal) {
        answer = i;
        break;
    }
}


console.log(answer)
