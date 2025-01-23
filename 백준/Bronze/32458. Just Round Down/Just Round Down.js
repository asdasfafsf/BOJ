const x = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(Math.floor(Number(x)));