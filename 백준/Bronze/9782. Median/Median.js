const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n');

let caseNum = 1;
for (let line of input) {
    const arr = line.trim().split(/\s+/).map(Number);
    const n = arr[0];
    if (n === 0) break;
    const data = arr.slice(1);
    let median;
    if (n % 2 === 1) {
        median = data[(n - 1) / 2];
    } else {
        median = (data[n / 2 - 1] + data[n / 2]) / 2;
    }
    console.log(`Case ${caseNum}: ${median.toFixed(1)}`);
    caseNum++;
}