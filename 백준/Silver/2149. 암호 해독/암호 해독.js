const [key, encrypted] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const arr = Array.from(Array(encrypted.length / key.length), () => Array( key.length).fill(-1))
let index = 0;
for (let j = 0; j < key.length; j++) {
    for (let i = 0; i < encrypted.length / key.length; i++) {
        arr[i][j] = encrypted[index++];
    }
}


const newKey = [...new Set(key.split(''))].sort();
const indexes = [];

for (let i = 0; i < newKey.length; i++) {
    for (let j = 0; j < key.length; j++) {
        if (newKey[i] === key[j]) {
            indexes.push(j);
        }
    }
}

const realIndexes = (Object.entries(indexes).map(elem => elem.reverse())).sort((a, b) => a[0] - b[0]).map(elem => Number(elem[1]));
let answer = '';
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < realIndexes.length; j++) {
        answer += arr[i][realIndexes[j]];
    }
}
console.log(answer);