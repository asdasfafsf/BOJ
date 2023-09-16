const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .map(elem => elem.split(' ').map(Number));

const arr = input.slice(1)
                .sort((a, b) => a[0] - b[0]);

const dp = new Array(arr.length).fill(1);


const canUse = (line1, line2) => {
    const [start1, end1] = line1;
    const [start2, end2] = line2;

    if (start1 < start2) {
        return end1 > end2;
    }

    return end2 < end1;
}


for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
        if (canUse(arr[i], arr[j])) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(+[input[0]] - Math.max(...dp));