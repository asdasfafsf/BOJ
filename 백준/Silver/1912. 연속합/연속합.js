const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .slice(1)
                    .map(elem => elem.split(' ').map(Number))[0];



const call = input => {
    const data = [input[0]];
    let max = input[0];

    for (let i = 1; i < input.length; i++) {
        data[i] = Math.max(data[i - 1] + input[i], input[i]);
        max = Math.max(data[i], max)
    }

    console.log(max);
}

call(input);
