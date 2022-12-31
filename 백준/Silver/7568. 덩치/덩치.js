const fs = require('fs');
const input = (fs.readFileSync('/dev/stdin').toString().trim().split('\n'));

const arr = input.map(e => e.trim().split(' ').map(ee => parseInt(ee.trim())));


let str = '';
const len = arr[0][0];


for (let i = 1; i < len + 1; i++) {
    const h = arr[i][1];
    const w = arr[i][0];

    let value = 1;

    for (let j = 1; j < len + 1; j++) {
        const hh = arr[j][1];
        const ww = arr[j][0];

        if (h < hh) {
            if (w < ww) {
                value++;
            } 
        } 
    }

    str += value + ' ';
}

console.log(str.trim());