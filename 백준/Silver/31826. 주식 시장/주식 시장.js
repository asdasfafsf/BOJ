const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const sell = Array(13001).fill(0);
const buy = Array(13001).fill(0);

let answer = 10000;

for (let i = 1; i < input.length; i++) {
    let [p, x, f] = input[i].split(' ').map(Number);

    
    if (f === 1) {
        if (sell[p] > 0) {
            answer = p;
            sell[p] -= x;

            if (sell[p] < 0) {
                buy[p] -= sell[p];
                sell[p] = 0;
            }
        } else {
            buy[p] += x;
        }
    } else {
        if (buy[p] > 0) {
            answer = p;
            buy[p] -= x;

            if (buy[p] < 0) {
                sell[p] -= buy[p];
                buy[p] = 0
            }
        } else {
            sell[p] += x;
        }
    }
}


console.log(answer)

