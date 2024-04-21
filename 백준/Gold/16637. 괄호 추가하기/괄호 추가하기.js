


const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const arr = input[1].split('');


let answer = -999999999999;

const calc = (num1, num2, oper) => {
    if (oper === '*') {
        return num1 * num2;
    } else if (oper === '+') {
        return num1 + num2;
    } else if (oper === '-') {
        return num1 - num2;
    }
}

const recursion = (start, depth, path) => {
    if (depth === N >> 1) {
        const result = [];

        for (let i = 0; i < path.length; i++) {
            if (path[i]) {
                result.push(calc(Number(arr[i * 2]), Number(arr[i * 2 + 2]), arr[i * 2 + 1]));
                i++
            } else {
                result.push(Number(arr[i * 2]));
            }

            if (arr[i * 2 + 1]) {
                result.push(arr[i * 2 + 1])
            }
        }

        let res = 0;
        if (result.length === 1) {
            res = result[0];
        } else {
            res = calc(Number(result[0]), Number(result[2]), result[1]);

            for (let i = 1; i < result.length >> 1; i++) {
                res = calc(Number(res), Number(result[i * 2 + 2]), result[i * 2 + 1]);
            }
        }

        answer = Math.max(res, answer)
        return;
    }



    for (let i = start; i < N >> 1; i++) {
        if (path[i - 1] === false || i === 0) {
            path[i] = true;
            recursion(i + 1, depth + 1, path);
        }
        path[i] = false;
        recursion(i + 1, depth + 1, path);
    }
}

recursion(0, 0, Array((N >> 1) + 1).fill(false));

console.log(answer);