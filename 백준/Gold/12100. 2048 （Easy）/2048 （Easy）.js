
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;
let arr = [];
let index = 0;
let answer = 0;

const recursion = (depth, d, map) => {
    let currentMax = 0;
    let isMove = false;
    const check = Array.from({length: N}, () => Array.from({length: N}, () => false));
    const newMap = map.map(elem => elem.map(elem => elem));

    
    if (d === 0) {
        for (let x = 0; x < N; x++) {
            for (let y = 1; y < N; y++) {
                if (newMap[y][x] === 0) {
                    continue;
                }
                
                /** 목적지 */
                let k = y;
                while (k > 0 && newMap[k - 1][x] === 0) {
                    isMove = true;
                    newMap[k - 1][x] = newMap[k][x];
                    newMap[k][x] = 0;
                    k--;
                }
                
                if (k === 0) {
                    continue;
                }
       
                if (!check[k - 1][x] && newMap[k - 1][x] === newMap[k][x]) {
                    isMove = true;
                    check[k - 1][x] = true;
                    newMap[k - 1][x] *= 2;
                    newMap[k][x] = 0;
                    currentMax = Math.max(currentMax, newMap[k - 1][x]);
                }
            }
        }
    } else if (d === 1) {
        for (let y = 0; y < N; y++) {
            for (let x = 1; x < N; x++) {
                if (newMap[y][x] === 0) {
                    continue;
                }
                
                let k = x;
                while (k > 0 && newMap[y][k - 1] === 0) {
                    isMove = true;
                    newMap[y][k - 1] = newMap[y][k];
                    newMap[y][k] = 0;
                    k--;
                }

                if (k === 0) {
                    continue;
                }

                if (!check[y][k - 1] && newMap[y][k - 1] === newMap[y][k]) {
                    isMove = true;
                    newMap[y][k - 1] *= 2;
                    check[y][k - 1] = true;
                    newMap[y][k] = 0;
                    currentMax = Math.max(currentMax, newMap[y][k - 1]);
                }
            }
        }
    } else if (d === 2) {
        for (let y = 0; y < N; y++) {
            for (let x = N - 2; x >= 0; x--) {
                if (newMap[y][x] === 0) {
                    continue;
                }
            

                let k = x;

                while (k < N - 1 && newMap[y][k + 1] === 0) {
                    isMove = true;
                    newMap[y][k + 1] = newMap[y][k];
                    newMap[y][k] = 0;
                    k++;
                }

                if (k === N - 1) {
                    continue;
                }

                if (!check[y][k + 1] && newMap[y][k + 1] === newMap[y][k]) {
                    isMove = true;
                    check[y][k + 1] = true;
                    newMap[y][k + 1] *= 2;
                    newMap[y][k] = 0;
                    currentMax = Math.max(currentMax, newMap[y][k + 1]);
                }
            }
        }
    } else {
        for (let x = 0; x < N; x++) {
            for (let y = N - 2; y >= 0; y--) {
                if (newMap[y][x] === 0) {
                    continue;
                }
                
                let k = y;
                while (k < N - 1 && newMap[k + 1][x] === 0) {
                    isMove = true;
                    newMap[k + 1][x] = newMap[k][x];
                    newMap[k][x] = 0;
                    k++
                }
                
                if (k === N - 1) {
                    continue;
                }
       
                if (!check[k + 1][x] && newMap[k + 1][x] === newMap[k][x]) {
                    isMove = true;
                    check[k + 1][x] = true;
                    newMap[k + 1][x] *= 2;
                    newMap[k][x] = 0;
                    currentMax = Math.max(currentMax, newMap[k + 1][x]);
                }
            }
        }
    }

  

    answer = Math.max(currentMax, answer);
    if (depth === 4) {
        return;
    }

    if (isMove) {
        recursion(depth + 1, (d + 0) % 4, newMap);
    }
    recursion(depth + 1, (d + 1) % 4, newMap);
    recursion(depth + 1, (d + 2) % 4, newMap);
    recursion(depth + 1, (d + 3) % 4, newMap);
}


rl.on('line', line => {
    if (index === 0) {
        N = +line;
        index++;
    } else {
        arr.push(line.split(' ').map(Number));
        index++;
        
        if (index > N) {
            rl.close();
        }
    }
})


rl.on('close', () => {
    answer = Math.max(answer, ... arr.flat());
    recursion(0, 0, arr)
    recursion(0, 1, arr)
    recursion(0, 2, arr)
    recursion(0, 3, arr)

    console.log(answer)
})

