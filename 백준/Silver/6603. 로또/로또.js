const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n')
                .map(elem => elem.split(' ').map(Number));

const arr = input.slice(0, -1);
let ret = '';
const MAX = 6;


const recursion = (start, current, arr, visitedList) => {
    if (current === MAX) {
        ret += visitedList.join(' ') + '\n'
        return;
    }


    for (let i = start; i < arr.length; i++) {
        visitedList[current] = arr[i];
        recursion(i + 1, current + 1, arr, visitedList);
        visitedList[current] = 0;
    }
}




arr.forEach(elem => {
    const S = elem[0];
    const K = elem.slice(1);
    
    recursion(0, 0, K, new Array(MAX).fill(0));
    ret += '\n';
})

console.log(ret.trim());

