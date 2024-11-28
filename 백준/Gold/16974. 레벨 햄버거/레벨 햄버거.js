const [N, X] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const dp = [1];
const pattys = [1];

for (let i = 1; i < 52; i++) {
    dp[i] = dp[i - 1] * 2 + 3;
    pattys[i] = pattys[i - 1] * 2 + 1;
}

const recursion = (n, x) => {
    if (n === 0) return x === 1 ? 1 : 0;

    const firstLayer = dp[n - 1] + 1;
    if (x === 1) {
        return 0;
    } else if (x <= firstLayer) {
        return recursion(n - 1, x - 1);
    } else if (x === firstLayer + 1) {
        return pattys[n - 1] + 1;
    } else if (x <= firstLayer + dp[n - 1] + 1) {
        return pattys[n - 1] + 1 + recursion(n - 1, x - firstLayer - 1);
    } else {
        return pattys[n];
    }
};

console.log(recursion(N, X));
