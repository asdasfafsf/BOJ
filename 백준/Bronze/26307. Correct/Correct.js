const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ');
const HH = parseInt(input[0], 10);
const MM = parseInt(input[1], 10);

const startMinutes = 9 * 60;
const endMinutes = HH * 60 + MM;

console.log(endMinutes - startMinutes);