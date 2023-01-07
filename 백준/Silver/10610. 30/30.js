let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const nums = [...input]
            .map(Number);

if (nums.indexOf(0) == -1) {
    console.log(-1);
} else {
    const sum = nums.reduce( (p, c) => (p + c), 0);
    
    if (sum % 3 === 0 && sum !== 0) {
        console.log(nums.sort((a, b) => b - a).join(''));
    } else {
        console.log(-1);
    }
}
