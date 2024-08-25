const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim();

function isPrime(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}
    
if (!isPrime(Number(input))) {
    console.log('no');
    process.exit(0)
}
const convertedMap = [0, 1, 2, false, false, 5, 9, false, 8, 6];
const converted = input.split('')
    .map(Number)
    .map(elem => convertedMap[elem]);

if (converted.includes(false)) {
    console.log('no')
} else {
    const num = Number(converted.reverse().join(''));

    if (isPrime(num)) {
        console.log('yes');
    } else {
        console.log('no')
    }
}