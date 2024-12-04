const m = +require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()


console.log(m - Math.floor(Math.sqrt(m)) - Math.floor(Math.sqrt(m / 2)))