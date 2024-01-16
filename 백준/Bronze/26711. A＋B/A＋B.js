console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(BigInt)
    .reduce((pv, cv) => pv + cv, 0n)
    .toString()
    );