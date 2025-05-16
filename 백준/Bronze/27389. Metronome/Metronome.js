const n = +require('fs').readFileSync(0, 'utf-8').toString().trim();
console.log((n / 4).toFixed(2));