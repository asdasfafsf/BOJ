
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const T = +input[0];
const answer = []

const cal = (A, B) => {
    return (
          ((A.charCodeAt(0) - B.charCodeAt(0)) && 1) 
        + ((A.charCodeAt(1) - B.charCodeAt(1)) && 1) 
        + ((A.charCodeAt(2) - B.charCodeAt(2)) && 1) 
        + ((A.charCodeAt(3) - B.charCodeAt(3)) && 1) 
    )
}


for (let t = 0; t < T; t++) {
    const N = +input[t * 2 + 1];

    if (N > 32 || N < 2) {
        answer.push(0);
        continue;
    }

    const arr = input[t * 2 + 2].split(' ');

    if (N === 2) {
        answer.push(cal(arr[0], arr[1]))
    }

    const len = Math.min(N, 32)

    let min = 999;

    for (let i = 0; i < len - 2; i++) {
        const A = arr[i];

        for (let j = i + 1; j < len - 1; j++) {
            const B = arr[j];

            for (let k = j + 1; k < len; k++) {
                const C = arr[k];

                min = Math.min(min,cal(A, B) + cal(A, C) + cal(B, C));
            }
        }
    }

    answer.push(min)
}

    
console.log(answer.join('\n'));