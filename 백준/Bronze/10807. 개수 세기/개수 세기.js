console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .slice(1)
    .map(Number)
    .reduce((pv, cv, ci, arr) => pv + (arr.at(-1) === cv ? 1 : 0), -1));


