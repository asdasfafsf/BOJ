const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, K, Q, M] = input[0].split(' ').map(Number);
const sleeps = input[1].split(' ').map(Number);
const students = input[2].split(' ').map(Number);

const prefixSumList = Array.from({length: N * 2 + 2}, () => 1);

for (let i = 0; i < students.length; i++) {
    let studentNo = students[i];

    if (sleeps.includes(studentNo)) {
        continue;
    }

    while (studentNo < prefixSumList.length) {
        prefixSumList[studentNo] = 0;
        studentNo += students[i];
    }
}

for (let i = 0; i < sleeps.length; i++) {
    const sleep = sleeps[i];
    prefixSumList[sleep] = 1;
}


for (let i = 1; i < prefixSumList.length; i++) {
    prefixSumList[i] = prefixSumList[i] + prefixSumList[i - 1];
}


const answer = [];
for (let i = 3; i < input.length; i++) {
    const [S, E] = input[i].split(' ').map(Number);
    answer.push(prefixSumList[E] - prefixSumList[S - 1])
}

console.log(answer.join('\n'))