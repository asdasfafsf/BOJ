const [N, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(/\s/)
    .map(Number);


const sum = arr.reduce((pv, cv) => pv + cv);
const list = Array.from(Array(sum + 1), () => false);
let answer = sum + 1;

const recursion = (current, value) => {
    if (current === N) {
        if (list[value] === false) {
            list[value] = true;
        }
        return;
    }

    recursion(current + 1, value + arr[current]);
    recursion(current + 1, value - arr[current]);
    recursion(current + 1, value);
}
recursion(0, 0)
console.log(list.reduce((pv, cv) => pv + (cv ? 0 : 1), 0));