const [[N], dominoes] = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));


let answer = 0;
for (let i = 0; i < dominoes.length; i++) {
  let sum = dominoes[i];
  let count = 1;
  for (let j = i + 1; j < dominoes.length; j++) {
    if (sum >= dominoes[j]) {
      sum += dominoes[j];
      count++;
    }
  }

  answer = Math.max(count, answer);
}

console.log(answer)