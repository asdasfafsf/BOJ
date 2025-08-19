const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

const N = Number(input);

let result = [];
for (let i = 1; i <= N; i++) {
    result.push(i.toString());
    if (i % 6 === 0 || i === N) {
        result.push("Go!");
    }
}

console.log(result.join(" "));