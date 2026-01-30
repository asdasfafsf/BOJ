const fs = require('fs');

const n = fs.readFileSync(0, 'utf-8').toString().trim();

let a = n.split('').map((c) => c.charCodeAt(0) - 48);

let i = a.length - 1;
while (i >= 0 && a[i] === 9) i--;

if (i >= 0) {
    a[i] += 1;
    for (let k = i + 1; k < a.length; k++) a[k] = 1;
    console.log(a.join(''));
} else {
    console.log('1' + '1'.repeat(a.length));
}