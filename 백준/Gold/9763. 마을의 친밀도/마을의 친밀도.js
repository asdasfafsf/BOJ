const [[N], ...points] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const calc = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);

let answer = Infinity;

for (let i = 0; i < points.length; i++) {
    let s12 = Infinity;
    let s23 = Infinity;
    
    for (let j = 0; j < points.length; j++) {
        if (i !== j) {
            const cur = calc(points[i], points[j]);

            if (cur < s12) {
                s23 = s12;
                s12 = cur;
            } else if (cur < s23) {
                s23 = cur;
            }
        }
    }
    
    answer = Math.min(answer, s12 + s23);
}

console.log(answer);