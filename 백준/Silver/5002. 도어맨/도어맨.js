
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const X = +input[0];
const peoples = input[1].split('');

const counts = [0, 0];
const indexMap = {
    'M': 0,
    'W': 1
}

for (let i = 0; i < peoples.length;) {
    const index = indexMap[peoples[i]];
    
    const man = counts[0] + (index ^ 1);
    const woman = counts[1] + index;

    if (Math.abs(man - woman) <= X) {
        counts[index]++;
        i++;
    } else {
        if (i === peoples.length - 1 || peoples[i] === peoples[i + 1]) {
            break;
        } else if (peoples[i] !== peoples[i + 1]) {
            [peoples[i], peoples[i + 1]] = [peoples[i + 1], peoples[i]]
        } 
    }
}


console.log(counts[0] + counts[1])