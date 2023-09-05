const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(Number));



const [N, S] = input[0];
const arr = input.slice(1)[0];
const visitedList = arr.map(elem => false);

let result = 0;

const recursion = (current, start) => {
    const targetList = arr.filter((elem, index) => visitedList[index])
    const sum = targetList.length === 0
                ? S + 1
                : targetList.reduce((pv, cv) => pv + cv, 0);

    if (sum === S) {
        result++;
    }

    if (current === N) {
        return;
    }


    for (let i = start; i < arr.length; i++) {
        
        visitedList[i] = true;
        recursion(current + 1, i + 1);
        visitedList[i] = false;
    }
}

recursion(0, 0);

console.log(result);