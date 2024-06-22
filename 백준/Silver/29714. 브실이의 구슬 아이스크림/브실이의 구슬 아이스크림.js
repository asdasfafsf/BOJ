const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const colors = {};
input[1].split(' ').map(Number).forEach(elem => {
  if (!colors[elem]) {
    colors[elem] = 0;
  }

  colors[elem]++;
});
const Q = +input[2];


for (let i = 3; i < input.length; i+=2) {

  const line1 = input[i].split(' ').slice(1).map(Number);
  
  let canEat = true;

  const tmpColors = {};

  for (const color of line1) {
    if (!colors[color]) {
      canEat = false;
      break;
    }

    if (!tmpColors[color]) {
      tmpColors[color] = 0;
    }

    tmpColors[color]++;

    if (tmpColors[color] > colors[color]) {
      canEat = false;
      break;
    }
  }

  if (canEat) {
    const line2 = input[i + 1].split(' ').slice(1).map(Number);

    for (const color of line2) {
      if (!colors[color]) {
        colors[color] = 0;
      }
      colors[color]++;
    }

    for (const color of line1) {
      colors[color]--;
    }
  }
}

const keys = Object.keys(colors);

let len = 0;
const answer = [];
for (const key of keys) {
  const count = colors[key];
  len += count;
  
  for (let i = 0; i < count; i++) {
    answer.push(key)
  }
}


console.log(len);
console.log(answer.join(' '))
