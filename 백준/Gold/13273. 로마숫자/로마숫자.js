const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const map = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}
const strs = Object.keys(map);
const nums = Object.values(map);

const answer = [];
for (let i = 1; i < input.length; i++) {
    let str = input[i];

    if (Number.isNaN(Number(str))) {
        // console.log(str);
        let result = 0;

        for (let j = 0; j < strs.length; j++) {
            const max = strs[j];
            while (str.indexOf(max) === 0) {
                str = str.replace(max, '');
                result += nums[j];
            }
        }

        answer.push(result);
    } else {
        let result = '';
        let num = Number(str);

        for (let j = 0; j < nums.length; j++) {
            const max = nums[j];
            const count = Math.floor(num / max);
            result += strs[j].repeat(count);
            num %= max;
        }

        answer.push(result);
    }
}

console.log(answer.join('\n'));