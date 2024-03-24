const [[N, B], ...matrix] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const calc = (matrix1, matrix2) => {
    const result = Array.from(Array(N), () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                result[i][j] = ((matrix1[i][k] * matrix2[k][j]) % 1000 + result[i][j]) % 1000;
            }
        }
    }

    return result;
}
const cc = 100000000000;

const recursion = (matrix, M) => {
    if (M === 0) {
        return matrix.map(elem => elem.map(elemElem => 0))
    } else if (M === 1) {
        return matrix;
    } else {
        const tmp = recursion(matrix, Math.floor(M / 2));

        if (M % 2 === 0) {
            return calc(tmp, tmp);
        } else {
            return calc(calc(tmp, tmp), matrix);
        }
    }

}

const result = recursion(matrix, B);
console.log(result.map(elem => elem.map(elemElem => elemElem % 1000).join(' ')).join('\n'))