const input = +require('fs').readFileSync(0, 'utf-8');

const answer = []
for (let i = input; i >= 1; i--) {
  answer.push(i);
}
console.log(answer.join('\n'));
