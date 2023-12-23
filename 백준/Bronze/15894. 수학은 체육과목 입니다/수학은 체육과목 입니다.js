const input = +require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim();


console.log(input * 2 + input + 1 + ((input - 1)));