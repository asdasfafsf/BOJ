const N = +require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

function pow(a, n, mod) {
    a = BigInt(a);
    n = BigInt(n);
    mod = BigInt(mod);
    let result = 1n;

    while (n > 0n) {
        if (n % 2n === 1n) result = (result * a) % mod;
        a = (a * a) % mod;
        n /= 2n;
    }

    return result;
}

const MOD = 1000000007n;
const b = pow(2, N - 1, MOD);
console.log(b.toString());