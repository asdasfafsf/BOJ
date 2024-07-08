const [[N], arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));




for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 !== arr[i] % 2) {
        console.log('NO');
        process.exit(0);
    }
}

console.log('YES')