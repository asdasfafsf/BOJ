const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               

const N = +input.at(0);
const distanceList = input.at(1).split(' ').map(BigInt);
const priceList = input.at(2).split(' ').map(BigInt);


let answer = 0n;
let curPrice = priceList.at(0);

for (let i = 0; i < distanceList.length; i++) {
    answer += curPrice * distanceList[i];

    if (curPrice > priceList[i + 1]) {
        curPrice = priceList[i + 1];
    }
}

console.log(answer.toString().replace('n', ''))