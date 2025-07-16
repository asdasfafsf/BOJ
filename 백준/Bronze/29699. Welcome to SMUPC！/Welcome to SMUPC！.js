const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim();

const str = 'WelcomeToSMUPC';
const N = Number(input);
console.log(str[(N - 1) % 14]);