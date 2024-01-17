let [[N, M], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const happiness = []
happiness[0] = arr[1] - arr[0];
for (let i = 1; i < arr.length - 1; i++) {
    happiness[i] = arr[i + 1] - arr[i];
}

const prefixSum = [happiness[0]];

for (let i = 1; i < happiness.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + happiness[i];
}

const rightMaxs = Array.from({length: M + 1}, () => -Infinity);
rightMaxs[0] = prefixSum.at(-1);


for (let i = 1; i < rightMaxs.length; i++) {
    rightMaxs[i] = Math.max(rightMaxs[i - 1], prefixSum[prefixSum.length - i - 1])
}



const leftMaxs = Array.from({length: M + 1}, () => Infinity);
leftMaxs[M] = 0
for (let i = leftMaxs.length - 2; i >= 0; i--) {
    leftMaxs[i] = Math.min(prefixSum[M - i - 1], leftMaxs[i + 1]);
}


let answer = prefixSum.at(-1);

for (let i = 0; i < leftMaxs.length; i++) {
    answer = Math.max(answer, rightMaxs[i] - leftMaxs[i]);
}
// console.log(happiness)
// console.log(prefixSum)
// console.log(rightMaxs);
// console.log(leftMaxs)
console.log(answer)