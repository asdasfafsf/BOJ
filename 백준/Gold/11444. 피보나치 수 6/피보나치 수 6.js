const N = BigInt(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim());


if (N === 0n) {
    console.log('0');
} else {
    const div = 1000000007n;
    const multiMatrix = (a, b) => {
        const c = [[0n, 0n], [0n, 0n]];

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                    c[i][j] += (a[i][k] % div * b[k][j] % div) % div;
                }
            }
        }

        return c;
    }

    const fib = (mat, N) => {
        if (N === 1n) {
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    mat[i][j] = mat[i][j] % div;
                }
            }

            return mat;
        } else {
            const tmp = fib(mat, N / 2n);

            if (N % 2n === 0n) {
                return multiMatrix(tmp, tmp);
            } else {
                return multiMatrix(multiMatrix(tmp, tmp), mat);
            }
        }
    }

    const mat = [[1n, 1n], [1n, 0n]];
    const mat2 = [[1n], [0n]];

    const mat3 = fib(mat, N);
    const answer = [[0n], [0n]];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            answer[i][0] += (mat3[i][j] % div * mat2[j][0] % div) % div;
        }
    }
    console.log(answer[1][0].toString())
}