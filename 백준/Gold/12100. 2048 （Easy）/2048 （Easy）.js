const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const maxDepth = 5;
let answer = 0;
let count = 0;
let pruningCount = 0;
const answers = Array.from({length: 11}, () => 0);


const recursion = (depth, d, board) => {
    count++;
    let currentMax = 0;
    let isMove = false;
    const check = Array.from({length: N}, () => Array.from({length: N}, () => false));
    const newMap = board.map(elem => [...elem]);
    
    if (d === 0) {
        for (let x = 0; x < N; x++) {
            for (let y = 1; y < N; y++) {
                if (newMap[y][x] === 0) {
                    continue;
                }
                currentMax = Math.max(newMap[y][x], currentMax);
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
                currentMax = Math.max(newMap[y][x], currentMax);
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
            
                currentMax = Math.max(newMap[y][x], currentMax);

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
                currentMax = Math.max(newMap[y][x], currentMax);
                
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

    if (!isMove) {
        pruningCount++;
        return;
    }

    answer = Math.max(currentMax, answer);

    if (depth === maxDepth - 1) {
        if (currentMax > answers[depth + 1]) {
            answers[depth + 1] = Math.max(answers[depth + 1], currentMax);

            for (let i = 10; i > 0; i--) {
                answers[i - 1] = (answers[i] / 2);
            }
        }   

        return;
    }

    if (currentMax <= answers[depth + 1]) {
        pruningCount++;
        return;
    }

    recursion(depth + 1, (d + 0) % 4, newMap);
    recursion(depth + 1, (d + 1) % 4, newMap);
    recursion(depth + 1, (d + 2) % 4, newMap);
    recursion(depth + 1, (d + 3) % 4, newMap);
}

answer = Math.max(answer, ... arr.flat());
recursion(0, 0, arr)
recursion(0, 1, arr)
recursion(0, 2, arr)
recursion(0, 3, arr)

console.log(answer);