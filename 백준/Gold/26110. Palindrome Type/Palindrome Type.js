const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim();

const recursion = (str, k) => {
    if (k > 3) {
        return k;
    }

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return Math.min(
                recursion(str.slice(left + 1, right + 1), k + 1),
                recursion(str.slice(left, right), k + 1)
            );
        }
    }

    return k;
};

const answer = recursion(input, 0);
console.log(answer < 4 ? answer : -1);