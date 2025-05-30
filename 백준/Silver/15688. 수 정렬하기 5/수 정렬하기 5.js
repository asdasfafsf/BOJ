console.log((require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map(Number))
    .sort((a, b) => a - b)
    .join('\n'));