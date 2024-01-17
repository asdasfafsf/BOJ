
const [[N], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const invertedIndexs = Array.from({length: 1000001}, () => -1);
const counts = arr.map(elem => 0);
for (let i = 0; i < arr.length; i++) {
    invertedIndexs[arr[i]] = i;
}

for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let multiple = current;

    while( (multiple += current) < 1000001) {
        const index = invertedIndexs[multiple];

        if (index !== -1) {
            counts[index]--;
            counts[i]++;
        }
    }
}

console.log(counts.join(' '))