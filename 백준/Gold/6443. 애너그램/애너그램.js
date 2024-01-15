
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const answer = [];

for (let i = 1; i < input.length; i++) {
    const counts = Array.from({length: 26}, () => 0);

    for (let j = 0; j < input[i].length; j++) {
        const index = input[i].charCodeAt(j) - 'a'.charCodeAt(0);
        counts[index]++;
    }

    const len = input[i].length;

    const recursion = (depth, value) => {
        if (depth === len) {
            answer.push(value);
            return;
        }

        for (let i = 0; i < counts.length; i++) {
            if (counts[i] > 0) {
                counts[i]--;
                recursion(depth + 1, value + String.fromCharCode(i + 'a'.charCodeAt(0)));
                counts[i]++;
            }
        }
    }   

    recursion(0, '')
}

console.log(answer.join('\n'));