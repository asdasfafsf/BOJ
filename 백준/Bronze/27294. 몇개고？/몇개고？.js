const [T, S] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

if (T >= 12 && T <= 16 && S === 0) {
    console.log(320);
} else {
    console.log(280);
}