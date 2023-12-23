const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const arr = input.slice(1);

const answer = [];
for (const str of arr) {
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'O') {
            counter++;
        } else {
            sum += (counter + 1) * ((counter) / 2)
            counter = 0;
        }
    }

    if (str.charAt(str.length  - 1) === 'O') {
        sum += (counter + 1) * ((counter) / 2)
        counter = 0;
    }

    answer.push(sum);
}

console.log(answer.join('\n'));