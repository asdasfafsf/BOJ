console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))
    .slice(0, -1)
    .map(([a, b]) => a > b ? 'Yes' : 'No')
    .join('\n'));


