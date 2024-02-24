const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];

const inputs = input.slice(1, N + 1);
const outputs = input.slice(N + 1);

const inputMap = Object.fromEntries(inputs.map((elem, index) => [elem, index]));
const outputMap = Object.fromEntries(outputs.map((elem, index) => [elem, index]));

let answer = 0;


for (let i = 0; i < outputs.length; i++) {
    const output = outputs[i];
    const inputOrder = inputMap[output];

    for (let j = 0; j < inputOrder; j++) {
        const prevOutputOrder = outputMap[inputs[j]];

        if (prevOutputOrder > i) {
            answer++;
            break;
        }
    }
}

console.log(answer);