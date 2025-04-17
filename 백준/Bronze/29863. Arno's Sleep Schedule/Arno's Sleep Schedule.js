const fs = require('fs');
const [sleep, alarm] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const result = (alarm - sleep + 24) % 24;
console.log(result);
