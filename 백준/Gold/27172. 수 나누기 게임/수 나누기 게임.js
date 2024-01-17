
const [[N], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const max = Math.max(...arr);
const invertedIndexs = Array.from({length: max + 1}, () => -1);
const counts = arr.map(elem => 0);

for (let i = 0; i < arr.length; i++) {
    invertedIndexs[arr[i]] = i;
}

for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let multiple = current;

    while( (multiple += current) <= max) {
        const index = invertedIndexs[multiple];

        if (index !== -1 && typeof index !== 'undefined') {
            counts[index]--;
            counts[i]++;
        }
    }
}

console.log(counts.join(' '))