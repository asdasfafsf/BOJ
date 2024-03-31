const [N, ...heights] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(/\s/g)
    .map(Number);

const sum = heights.reduce((pv, cv) => pv + cv, 0);


if (sum % 3 !== 0) {
    console.log('NO');
} else {
    const quo = sum / 3;
    const two = heights.reduce((pv, cv) => pv + Math.floor(cv / 2), 0);

    if (quo <= two) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}