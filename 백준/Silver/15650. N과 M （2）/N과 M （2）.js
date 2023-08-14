const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


const [N, M] = input;
const array = new Array(M).fill(0);
const isVisited = new Array(N + 1).fill(false);


const recursion = (current, start) => { 
    if (current === M) {
        console.log(array.join(' '));
        return;
    }

    for (let i = start; i < N; i++) {
        if (!isVisited.at(i)) {
            isVisited[i] = true;
            array[current] = i + 1;
            recursion(current + 1, i + 1);
            isVisited[i] = false;
        }
    }
}


recursion(0, 0);