const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n')
                .map(elem => elem.split(' ').map(Number));



const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);
const visitedList = new Array(M).fill(0);


const recursion = (current) => {
    if (current === M) {
        console.log(visitedList.join(' '));
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (visitedList.at(current - 1) <= arr[i]) {
            visitedList[current] = arr[i];
            recursion(current + 1);
            visitedList[current] = 0; 
        }
    }
}

recursion(0);