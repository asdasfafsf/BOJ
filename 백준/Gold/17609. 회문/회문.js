const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const isPar = str => {
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        if (str[left++] !== str[right--]) return false;
    }
    return true;
};

for (let i = 1; i < input.length; i++) {
    const str = input[i];

    if (isPar(str)) {
        console.log(0);
        continue;
    }

    let left = 0;
    let right = str.length - 1;
    let printed = false;

    while (left <= right) {
        if (str[left] !== str[right]) {
            if (
                isPar(str.slice(0, left).concat(str.slice(left + 1))) ||
                isPar(str.slice(0, right).concat(str.slice(right + 1)))
            ) {
                console.log(1);
            } else {
                console.log(2);
            }
            printed = true;
            break;
        }
        left++;
        right--;
    }

    if (!printed) { 
        console.log(0);
    }
}