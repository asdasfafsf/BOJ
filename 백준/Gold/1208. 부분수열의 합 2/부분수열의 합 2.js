const [[N, S], [...arr]]= require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

arr.sort((a, b) => a - b);


const arr1 = arr.slice(0, arr.length >> 1);
const arr2 = arr.slice((arr.length >> 1), arr.length);

const visited1 = arr1.map(elem => false);
const visited2 = arr2.map(elem => false);

const result1 = [];
const result2 = []

const recursion = (start, arr, visited, result, value) => {
    for (let i = start; i < arr.length; i++) {
        if (visited[i] === false) {
            result.push(value + arr[i]);
            visited[i] = true;
            recursion(i + 1, arr, visited, result, value + arr[i]);
            visited[i] = false;
        }
    }
}

recursion(0, arr1, visited1, result1, 0);
recursion(0, arr2, visited2, result2, 0);

result1.sort((a, b) => a - b);
result2.sort((a, b) => a - b);

let answer = 0;


for (let i = 0; i < result1.length; i++) {
    let left = 0;
    let right = result2.length;

    const value = result1[i];

    let lower = 0;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const element = (result2[mid] + value);

        if (element < S) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    lower = right;

    left = 0;
    right = result2.length;
    let upper = 0;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const element = (result2[mid] + value);

        if (element <= S) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    upper = right;

    const count = (upper - 1) - lower + 1;
    let tmp = i; 

    while (result1[i] === result1[tmp + 1]) {
        tmp++;
    }

    answer += (tmp - i + 1) * count;
    i = tmp;
}


answer += result1.reduce((pv, cv) => cv === S ? pv + 1 : pv, 0);
answer += result2.reduce((pv, cv) => cv === S ? pv + 1 : pv, 0);

console.log(answer);