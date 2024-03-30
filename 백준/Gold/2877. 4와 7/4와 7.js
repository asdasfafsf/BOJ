const K = Number(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim());

let count = 0;
let tmpK = K - 1;
while (tmpK >= 0) {
    tmpK -= Math.pow(2, ++count);
}

const prefixSum = [0];

for (let i = 1; i < 50; i++) {
    prefixSum[i] = (prefixSum[i - 1] + Math.pow(2, i));
}

const answer = (K - prefixSum[count - 1] - 1)
    .toString(2)
    .padStart(count, '0')
    .replace(/0/g, '4')
    .replace(/1/g, '7')


console.log(answer)
/**
 * 4
 * 7
 * 
 * 44
 * 47
 * 74
 * 77
 * 
 * 444
 * 447
 * 474
 * 477
 * 744
 * 747
 * 774
 * 777
 * 
 */

/**
 * 0 1
 * 
 * 2 3 4 5
 * 
 * 6 7 8 9 10 11 12 13
 */
