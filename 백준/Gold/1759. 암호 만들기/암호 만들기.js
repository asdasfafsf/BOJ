const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n')
                .map(elem => elem.split(' '));


const [L, C] = input[0].map(Number);
const arr = input[1];
const visitedList = new Array(L).fill('')
let res = [];

const recursion = (current, start) => {
    if (current === L) {
        const copied = [...visitedList];

        const hasConsonant = copied.some(elem => 'aeiou'.includes(elem));
        const hasVowel = copied.filter(elem => 'bcdfghjklmnpqrstvwxyz'.includes(elem)).length > 1;
        if (hasConsonant && hasVowel) {
            copied.sort();
            res.push(copied.join(''));
        }

        return;
    }
    for (let i = start; i < C; i++) {
        visitedList[current] = arr[i];
        recursion(current + 1, i + 1);
        visitedList[current] = '';
    }
}

recursion(0, 0);
res.sort()
console.log(res.join('\n'));



