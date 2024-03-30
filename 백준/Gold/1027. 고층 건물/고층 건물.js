const [[N], [...points]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


let answer = 0;


const getInclination = (x1, y1, x2, y2) => ((y1 - y2) === 0 ? 0 : (y1 - y2) / (x1 - x2));
const getIntercept = (x1, y1, inclination)=> y1 - inclination * x1;
const getY = (x, inclination, intercept) => inclination * x + intercept;

for (let i = 0; i < points.length; i++) {
    const y1 = points[i];
    const x1 = i + 1;

    let count = 0;

    for (let j = i + 1; j < points.length; j++) {
        const y2 = points[j];
        const x2 = j + 1;

        const inclination = getInclination(x1, y1, x2, y2);
        const intercept = getIntercept(x1, y1, inclination);
        let isView = true;

        for (let k = i + 1; k < j; k++) {
            const y3 = points[k];
            const x3 = k + 1;

            const lineY = getY(x3, inclination, intercept);

            if (lineY <= y3) {
                isView = false;
                break;
            }
        }

        if (isView) {
            // console.log(`${i + 1}번째에서 ${j + 1}번째로 갈 수 있음`)
            count++;
        }
    }

    for (let j = 0; j < i; j++) {
        const y2 = points[j];
        const x2 = j + 1;

        const inclination = getInclination(x1, y1, x2, y2);
        const intercept = getIntercept(x1, y1, inclination);
        let isView = true;

        for (let k = j + 1; k < i; k++) {
            const y3 = points[k];
            const x3 = k + 1;

            const lineY = getY(x3, inclination, intercept);

            if (lineY <= y3) {
                isView = false;
                break;
            }
        }

        if (isView) {
            // console.log(`${i + 1}번째에서 ${j + 1}번째로 갈 수 있음`)
            count++;
        }
    }

    // console.log('')
    answer = Math.max(count, answer);
}

console.log(answer)
