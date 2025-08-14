const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n');

let tiger = 0;
let lion = 0;

for (let v of input) {
    if (v === 'Tiger') tiger++;
    else lion++;
}

console.log(tiger > lion ? 'Tiger' : 'Lion');