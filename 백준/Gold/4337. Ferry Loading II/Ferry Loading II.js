const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')

let T = +input[0];
let index = 0;
const answer = [];

while (T--) {
    const [n, t, m] = input[++index].split(' ').map(Number);

    const cars = [];

    for (let i = 0; i < m; i++) {
        cars.push(+input[++index]);
    }

    const remainder = (m % n) || n;
    let time = 0;

    for (let i = remainder - 1; i < m; i+=n) {
        time = Math.max(cars[i], time) + (2 * t);
    }

    answer.push(`${time - t} ${Math.ceil(m / n)}`)
}


console.log(answer.join('\n'))

