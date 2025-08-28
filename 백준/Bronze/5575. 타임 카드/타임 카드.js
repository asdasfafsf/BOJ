const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < 3; i++) {
    const [h1, m1, s1, h2, m2, s2] = input[i].split(' ').map(Number);

    let start = h1 * 3600 + m1 * 60 + s1;
    let end = h2 * 3600 + m2 * 60 + s2;
    let diff = end - start;

    let h = Math.floor(diff / 3600);
    diff %= 3600;
    let m = Math.floor(diff / 60);
    let s = diff % 60;

    console.log(h, m, s);
}