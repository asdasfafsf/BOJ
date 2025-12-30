const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

let totalMinutes = A * 60 + B + C;
totalMinutes %= 1440; // 24시간 = 1440분

const hour = Math.floor(totalMinutes / 60);
const minute = totalMinutes % 60;

console.log(hour, minute);