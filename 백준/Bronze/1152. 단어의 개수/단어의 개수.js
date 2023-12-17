const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();


if (input === '') {
    console.log('0');
} else {
    console.log(input.split(' ').length)
}
