const [LCS1, LCS2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')



const dp = Array.from({length: LCS1.length + 1}, () => Array.from({length: LCS2.length + 1}, () => [0, 0, 0]));

for (let i = 1; i <= LCS1.length; i++) {
    const LCS1Char = LCS1.charAt(i - 1);
    for (let j = 1; j <= LCS2.length; j++) {
        const LCS2Char = LCS2.charAt(j - 1);

        if (LCS1Char === LCS2Char) {
            const [y, x, length] = dp[i - 1][j - 1];
            dp[i][j] = [i - 1, j - 1, length + 1];
        } else {
            const [y1, x1, length1] = dp[i][j - 1];
            const [y2, x2, length2] = dp[i - 1][j];

            if (length1 > length2) {
                dp[i][j] = [i, j - 1, length1]; 
            } else {
                dp[i][j] = [i - 1, j, length2]
            }
        }
    }
}


let [startY, startX, startLength] = dp.at(-1).at(-1);
let answer = []

while (startLength) {
    const [prevY, prevX, prevLength] = dp[startY][startX];

    if (startLength > prevLength) {
        answer.push(LCS1.charAt(startY))
    }

    [startY, startX, startLength] = [prevY, prevX, prevLength]
}

answer = answer.reverse().join('');

console.log(`${answer.length}\n${answer}`.trim());