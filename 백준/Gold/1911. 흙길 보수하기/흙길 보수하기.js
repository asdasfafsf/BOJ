const [[N, L], ...roads] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



roads.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    }

    return a[0] - b[0];
})

let current = -1;
let answer = 0;
for (const [s, e] of roads) {
    if (current < s) {
        current = s;
    }

    let needs = 0;
    needs = e - current;
    needs = Math.ceil(needs / L);

    current += (needs * L);
    answer += needs;
}
console.log(answer);

