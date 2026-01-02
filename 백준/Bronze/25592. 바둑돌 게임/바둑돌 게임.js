const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

for (let m = 1; ; m++) {
    const start = m * (2 * m - 1);
    const end = m * (2 * m + 1) - 1;
    
    if (N >= start && N <= end) {
        console.log(0);
        break;
    }
    if (N < start) {
        console.log(start - N);
        break;
    }
}