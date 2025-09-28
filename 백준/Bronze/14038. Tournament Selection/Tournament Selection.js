const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

let wins = 0;
for (let i = 0; i < 6; i++) {
    if (input[i] === 'W') wins++;
}

if (wins === 5 || wins === 6) console.log(1);
else if (wins === 3 || wins === 4) console.log(2);
else if (wins === 1 || wins === 2) console.log(3);
else console.log(-1);