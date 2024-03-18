console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)
    .reduce((pv, cv) => pv + cv, 0));


