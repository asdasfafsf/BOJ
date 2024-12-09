const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

while (true) {
    const [a, b] = input.shift().split(' ').map(Number);

    if (a === 0 && b === 0) {
        break;
    }

    const seen = {};
    let num = a;
    let i = 0;

    while (true) {
        if (seen[num] !== undefined) {
            console.log(seen[num], num, i - seen[num]);
            break;
        }

        seen[num] = i;

        const numStr = num.toString().padStart(b, '0');
        const digits = numStr.split('');

        digits.sort((x, y) => y - x);
        const largest = parseInt(digits.join(''), 10);

        digits.sort((x, y) => x - y);
        const smallest = parseInt(digits.join(''), 10);

        num = largest - smallest;
        i++;
    }
}
