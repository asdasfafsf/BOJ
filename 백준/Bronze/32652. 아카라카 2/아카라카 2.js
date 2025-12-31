const fs = require('fs');
const K = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

console.log("AKA" + "RAKA".repeat(K));