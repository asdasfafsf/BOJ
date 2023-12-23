console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(elem => elem.split('').reverse().join(''))
    .map(Number)
    .sort((a, b) => b - a)[0])

