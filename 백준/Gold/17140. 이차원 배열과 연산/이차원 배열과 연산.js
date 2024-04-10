let [[r, c, k], ...matrix] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



r -= 1;
c -= 1;

if (matrix.at(r)?.at(c) === k) {
    console.log(0);
} else {
    let answer = -1;
    for (let t = 1; t <= 100; t++) {
        let row = matrix.length;
        let col = matrix[0].length;


        if (row >= col) {
            let maxLen = 0;
            const newMatrix = [];

            for (let y = 0; y < matrix.length; y++) {
                const counts = [];

                for (let x = 0; x < matrix.length; x++) {
                    const value = matrix[y][x];

                    if (value === 0) {
                        continue;
                    }

                    if (!counts[value]) {
                        counts[value] = [value, 0];
                    }
                    counts[value][1]++;
                }

                const newRow = counts.sort((a, b) => a[1] - b[1]).flat().slice(0, 100);
                maxLen = Math.max(newRow.length, maxLen);

                newMatrix.push(newRow);
            }

            for (let y = 0; y < newMatrix.length; y++) {
                while (newMatrix[y].length < maxLen) {
                    newMatrix[y].push(0);
                }
            }

            matrix = newMatrix;
        } else {
            const newMatrix = [];
            for (let x = 0; x < col; x++) {
                const counts = [];
                for (let y = 0; y < matrix.length; y++) {
                    const value = matrix[y][x];
                    if (value === 0) {
                        continue;
                    }
                    

                    if (!counts[value]) {
                        counts[value] = [value, 0];
                    }
                    counts[value][1]++;
                }
                const newCol = counts.sort((a, b) => a[1] - b[1]).flat().slice(0, 100);
                // console.log(newCol)

                for (let y = 0; y < newCol.length; y++) {
                    if (!newMatrix[y]) {
                        newMatrix[y] = Array(col).fill(0);
                    }

                    newMatrix[y][x] = newCol[y];
                }
            }
            matrix = newMatrix
        }

        // console.log(matrix.map(elem => elem.join(' ')).join('\n'))

        if (matrix.at(r)?.at(c) === k) {
            answer = t;
            break;
        }
        // console.log(t)
    }

    console.log(answer);
}