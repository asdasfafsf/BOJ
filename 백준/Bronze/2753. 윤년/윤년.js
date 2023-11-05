const year = +require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(1);
} else {
    console.log(0);
}