const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const C = parseFloat(input[0]);
const L = parseInt(input[1]);
let totalCost = 0;

for (let i = 2; i < 2 + L; i++) {
  const [w, l] = input[i].split(" ").map(parseFloat);
  totalCost += w * l * C;
}

console.log(totalCost.toFixed(7));