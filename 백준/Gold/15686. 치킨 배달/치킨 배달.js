const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(Number));


const [N, M] = input[0];
const arr = input.slice(1);


const chickenStoreList = [];
const cityList = [];

let min = Number.MAX_SAFE_INTEGER;

arr.forEach((elem, i) => {
    elem.forEach((elemElem, j) => {
        if (elemElem === 2) {
            chickenStoreList.push(i * N + j);
        } else if (elemElem === 1) {
            cityList.push(i * N + j);
        }
    })
})

const visited = new Array(M).fill(-1);
const recursion = (current, start) => {
    if (current === M) {
        min = Math.min(min, calculate(visited))
        return;
    }
    for (let i = start; i < chickenStoreList.length; i++) {
        const chickenStore = chickenStoreList[i];

        if (!visited.includes(chickenStore)) {
            visited[current] = chickenStore;
            recursion(current + 1, i + 1);
            visited[current] = -1;
        }
    }   
}


const toTwoDimensional = (arr, i, j) => arr.map(elem => [Math.floor(elem / i) + 1, (elem % j) + 1])


const calculate = (visited) => {
    const twoVisited = toTwoDimensional(visited, N, N);
    const twoCityList = toTwoDimensional(cityList, N, N);
    let sum = 0;

    twoCityList.forEach(city => {
        const [cy, cx] = city;
        let dist = Number.MAX_SAFE_INTEGER;
        twoVisited.forEach(visit => {
            const [vy, vx] = visit;
            dist = Math.min((Math.abs(cy - vy) + Math.abs(cx - vx)), dist);
        })

        sum += dist
    })

    return sum;
}


recursion(0, 0);


console.log(min)
