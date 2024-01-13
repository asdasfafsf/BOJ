const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();



const N = BigInt(input);
let max = 0n;
let depth = 0n;

for (let i = 0n; max < N; i += 1n) {
    max = (max * 2n) + i + 3n;
    depth = i;
}

const recursion = (n, depth, current) => {;
    const prev = ((current - depth - 3n) / 2n);
    const mid = current - prev * 2n;

    if (n < prev) {
        return recursion(n, depth - 1n, prev);
    } else if (n > mid + prev) {
        return recursion(n - (mid + prev), depth - 1n, prev);
    } else {
        return n === prev + 1n ? 'm' : 'o'
    }
}


const answer = recursion(N, depth, max);
console.log(answer)
/**
 * 3 4 3
 * 10 5 10
 * 
 */
