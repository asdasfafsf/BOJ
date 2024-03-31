const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


function gcd(a, b) {
    while(b > 0) {
        let c = a;
        a = b;
        b = c % b;
    }
    
    return a;
}

const answer = M - gcd(N, M);
console.log(answer)