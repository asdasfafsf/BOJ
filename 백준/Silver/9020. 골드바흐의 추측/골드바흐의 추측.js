const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => parseInt(e.trim()));

const max = Math.max.apply(null, input);


const arr = [0, 0];
for (let i = 2; i < max; i++) {
    arr[i] = i;
}

const sqrt = Math.ceil(Math.sqrt(max));

for (let i = 2; i <= sqrt; i++) {
    if (arr[i] === 0) {
        continue;
    }

    for (let j = i * 2; j < arr.length; j += i) {
        arr[j] = 0;
    }
}

const primeNumList = arr.filter(e => e != 0);
const cache = [];

primeNumList.forEach(e => cache[e] = 1);


for (let i = 1; i <= input[0]; i++) {
    const target = input[i];
    let minSub = Number.MAX_VALUE;
    let minValue = '';

    for (let p = 0; p < primeNumList.length; p++) {
        const value = primeNumList[p];
        const remainder = target - value;

        if (typeof cache[remainder] != 'undefined') {
            const sub = Math.abs(remainder - value);

            if (sub < minSub) {
                minValue = `${Math.min(remainder, value)} ${Math.max(remainder, value)}`;
                minSub = sub;
            }

            if (sub === 0) {
                break;
            }
        }
    }

    console.log(minValue);
}