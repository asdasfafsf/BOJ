const fs = require('fs')
const [A, B] = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split(' ')
    .map(Number);




const sqrt = Math.pow(Math.ceil(Math.sqrt(B)), 2)

const arr = [0, 0];
for (let i = 2; i <= sqrt; i++) {
    arr[i] = i;
}



for (let i = 2; i <= sqrt; i++) {
    if (arr[i] == 0) {
        continue;
    }

    for (let j = 2 * i; j<= sqrt; j+=i) {
        arr[j] = 0;
    }
}


const primeNumberList = arr.filter(elem => elem);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ? 1 : 0;
}


let answer = 0;

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < primeNumberList.length; j++) {
        const primeNumber = primeNumberList[j];
        const result = i * primeNumber;

        if (B < result) {
            break;
        }

        if (arr[result] > 1) {
            continue;
        }

        arr[result] = arr[i] + 1;

        if (A <= result && arr[arr[result]] === 1) {
            answer++;
        }
    }
}

console.log(answer)
