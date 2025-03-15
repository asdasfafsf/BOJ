const [[N], Hi] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const groups = new Map();
let answer = 0;
for (const height of Hi) {
    if (groups.has(height)) {
        groups.set(height, groups.get(height) - 1);

        if (groups.get(height) === 0) {
            groups.delete(height);
        }

        if (groups.has(height - 1)) {
            groups.set(height - 1, groups.get(height - 1) + 1);
        } else {
            groups.set(height - 1, 1);
        }
    } else {
        if (groups.has(height - 1)) {
            groups.set(height - 1, groups.get(height - 1) + 1);
        } else {
            groups.set(height - 1, 1);
        }
        answer++;
    }


}

console.log(answer)