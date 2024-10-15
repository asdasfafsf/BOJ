const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');


const [n, m] = input[0].split(' ').map(Number);

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);


const pa = [0, 0];
const pb = [0, 0];

for (const elem of a) {
    pa.push(pa.at(-1) + elem);
}

for (const elem of b) {
    pb.push(pb.at(-1) + elem);
}


const convertNum = (d, m, pa) => pa[Number(m)] + Number(d)
const convertDM = (num, pa) => {
    let left = 0;
    let right = pa.length;
 
    while (left <= right) {
        const mid = (left + right) >> 1;
        // console.log(`left : ${left} right : ${right} mid : ${mid}`)

        if (num > pa[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // console.log(left, right)

    // console.log(pa[right], num);

    return [num - pa[right], right].join(' ');
}
const z = Number(input[3]);
const answer = [];
for (let i = 4; i < 4 + z; i++) {
    const [d, m, c] = input[i].split(' ');
    const num = convertNum(d, m, c === 'A' ? pa : pb);
    const result = convertDM(num, c === 'A' ? pb : pa);

    answer.push(result);
    // break;
}

console.log(answer.join('\n'));