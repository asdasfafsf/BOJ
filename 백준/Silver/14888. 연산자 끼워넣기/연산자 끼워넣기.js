const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(Number));

const [numList, operatorList] = input.slice(1);


let min = 1000000001
let max = -1000000001

const recursion = (current, num) => {
    if (current === numList.length) {
        min = Math.min(num, min);
        max = Math.max(num, max);
        return;
    }
    

    if (operatorList[0] > 0) {
        operatorList[0]--;
        recursion(current + 1, num + numList[current]);
        operatorList[0]++;
    }

    if (operatorList[1] > 0) {
        operatorList[1]--;
        recursion(current + 1, num - numList[current]);
        operatorList[1]++;
    }

    if (operatorList[2] > 0) {
        operatorList[2]--;
        recursion(current + 1, num * numList[current]);
        operatorList[2]++;
    }

    if (operatorList[3] > 0) {
        operatorList[3]--;
        recursion(current + 1, ~~(num / numList[current]));
        operatorList[3]++;
    }

}

recursion(1, numList[0])

console.log(max, min);