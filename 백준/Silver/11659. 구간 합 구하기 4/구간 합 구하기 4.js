const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
                    .map(elem => elem.trim().split(' ').map(Number));

const arr = [0, ...input.slice(1)[0]];

for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1]
}

const data = input.slice(2);
let res = ''
data.forEach(elem => {
    const [start, end] = elem;
    res += (arr[end] - arr[start - 1]) + '\n'
})

console.log(res.trim());