const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


let n = +input[0];
let index = 0;
const answer = [];
while (n--) {
    const m = +input[++index];
    const scenarios = [];
    for (let i = 0; i < m; i++) {
        const [d, s, e] = input[++index].split(' ').map(Number);
        scenarios.push([d, s, e]);
    }

    scenarios.sort((a, b) => {
        if (a[0] - b[0] === 0) {
            if (a[2] - b[2] === 0) {
                return b[1] - a[1];
            }

            return a[2] - b[2];
       } 


        return a[0] - b[0];
    });

    let count = 1;
    let [pd, ps, pe] = scenarios[0];
    for (let i = 1; i < scenarios.length; i++) {
        const [cd, cs, ce] = scenarios[i];

        if (pe <= cs || cd !== pd) {
            [pd, ps, pe] = scenarios[i];
            count++;
        }
    }
    answer.push(`Scenario #${answer.length + 1}:
${count}
`);

// console.log(scenarios)
// console.log(answer.at(-1))
}

console.log(answer.join('\n').trim())