require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .toString()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))
    .forEach(([n, s]) => console.log(Math.floor(s / (n + 1))));