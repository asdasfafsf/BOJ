const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const n = parseInt(input[0]);
const recipient = new Array(n + 1);

for (let guest = 1; guest <= n; guest++) {
    const gift = parseInt(input[guest]);
    recipient[gift] = guest;  // 선물 gift를 받은 사람은 guest
}

const result = [];
for (let gift = 1; gift <= n; gift++) {
    result.push(recipient[gift]);
}
console.log(result.join('\n'));