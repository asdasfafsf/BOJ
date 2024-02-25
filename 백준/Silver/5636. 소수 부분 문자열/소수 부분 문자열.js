const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



const primeNums = [false, false]

for (let i = 2; i <= 100000; i++) {
    if (primeNums[i] === false) {
        continue;
    }

    primeNums[i] = true;

    for (let j = i * 2; j <= 100000; j += i) {
        primeNums[j] = false;
    }
}

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
    const str = input[i];
    let max = 0;
    
    for (let s = 0; s < str.length; s++) {
        let current = '';
        for (let j = s; j < s + 5; j++) {
            current += str.charAt(j);

            if (primeNums[+current] === true) {
                max = Math.max(+current, max);
            }
        }
    }

    answer.push(max);
}

console.log(answer.join('\n'))