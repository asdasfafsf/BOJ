const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

let count = 0;
for (let ch of input) {
    if ('aeiou'.includes(ch)) count++;
}
console.log(count);