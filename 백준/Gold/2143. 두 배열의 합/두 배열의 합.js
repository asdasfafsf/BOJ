const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



const T = BigInt(input[0]);
const n = +input[1];
const A = input[2].split(' ').map(BigInt);//.sort((a, b) => a > b);
const aTarget = [];

const m = +input[3];
const B = input[4].split(' ').map(BigInt);//.sort((a, b) => a > b)
const bTarget = [];

const recursion = (start, value, depth, arr, targetArr) => {
    if (arr.length <= start) {
        return;
    }
    targetArr.push(value + arr[start]);
    recursion(start + 1, value + arr[start], depth + 1, arr, targetArr);

}




for (let i = 0; i < A.length; i++) {
    let sum = A[i];
    aTarget.push(sum)
    
    for (let j = i + 1; j < A.length; j++) {
        sum += A[j];
        aTarget.push(sum);
    }
}

for (let i = 0; i < B.length; i++)  {
    let sum = B[i];
    bTarget.push(sum)

    for (let j = i + 1; j < B.length; j++) {
        sum += B[j];
        bTarget.push(sum);
    }
}


bTarget.sort((a, b) => Number(a - b));

let answer = 0;
for (let i = 0; i < aTarget.length; i++) {
    const aValue = aTarget[i];
    let left = 0;
    let right = (bTarget.length);
  
    while (left < right) {
        const mid = (left + right) >> 1;
        const bValue = bTarget[Number(mid)];
        const value = aValue +  bValue;

        if (value >= T) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    const lower = right;

    left = 0;
    right = (bTarget.length);


    while (left < right) {
        const mid = (left + right) >> 1
        const bValue = bTarget[Number(mid)];
        const value = aValue +  bValue;

        if (value > T) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    const upper = right;

    answer += (upper - lower);
}
console.log(answer.toString())
