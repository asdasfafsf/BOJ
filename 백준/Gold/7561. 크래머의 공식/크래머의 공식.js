
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')


const T =  + input[0];
const target = input.slice(1)
                .map(elem => elem.split(' ').map(Number));

let result = '';
for (let i = 0; i < T; i ++ ) {
    const arr = target.slice(i * 3, i * 3 + 3);
    
    const det = (arr[0][0] * (arr[1][1] * arr[2][2] - arr[1][2] * arr[2][1])
            - arr[0][1] * (arr[1][0] * arr[2][2] - arr[1][2] * arr[2][0])
            + arr[0][2] * (arr[1][0] * arr[2][1] - arr[1][1] * arr[2][0]))

    const det0 = arr[0][3] * (arr[1][1] * arr[2][2] - arr[1][2] * arr[2][1])
            - arr[0][1] * (arr[1][3] * arr[2][2] - arr[1][2] * arr[2][3])
            + arr[0][2] * (arr[1][3] * arr[2][1] - arr[1][1] * arr[2][3]);
    const det1 = arr[0][0] * (arr[1][3] * arr[2][2] - arr[1][2] * arr[2][3])
            - arr[0][3] * (arr[1][0] * arr[2][2] - arr[1][2] * arr[2][0])
            + arr[0][2] * (arr[1][0] * arr[2][3] - arr[1][3] * arr[2][0]);
    const det2 = arr[0][0] * (arr[1][1] * arr[2][3] - arr[1][3] * arr[2][1])
            - arr[0][1] * (arr[1][0] * arr[2][3] - arr[1][3] * arr[2][0])
            + arr[0][3] * (arr[1][0] * arr[2][1] - arr[1][1] * arr[2][0]);

    
    const x0 = det !== 0 && (Math.abs(det0/det) < 0.0005 ? 0.000 : (det0/det))
    const x1 = det !== 0 && (Math.abs(det1/det) < 0.0005 ? 0.000 : (det1/det))
    const x2 = det !== 0 && (Math.abs(det2/det) < 0.0005 ? 0.000 : (det2/det))


    result += `${det0} ${det1} ${det2} ${det}\n`;
    result += det !== 0 ? 'Unique solution: ' : 'No unique solution';
    result += det !== 0 ? `${x0 === 0 ? '0.000' : x0.toFixed(3)} ${x1 === 0 ? '0.000' : x1.toFixed(3)} ${x2 === 0 ? '0.000' : x2.toFixed(3)}` : ''
    result += '\n\n'
}   

console.log(result.trim());