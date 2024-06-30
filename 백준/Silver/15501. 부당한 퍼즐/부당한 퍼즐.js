const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')


const n = +input[0];

const tempArr = input[1].split(' ').map(Number);
const map = {};

for (let i = 0; i < tempArr.length; i++) {
  map[tempArr[i]] = i;
}

const arr = Array.from(Array(n), (_, k) => k + 1);
const reversed = input[2].split(' ').map(elem => map[elem] + 1);


const good = 'good puzzle';
const bad = 'bad puzzle'

if (n === 1) {
  if (arr[0] === reversed[0]) {
    console.log(good);
  } else {
    console.log(bad);
  }
} else if (n === 2) {
  if ((arr[0] === reversed[1] && arr[1] === reversed[0])
    || (arr[0] === reversed[0] && arr[1] === reversed[1])
  ) {
    console.log(good);
  } else {
    console.log(bad);
  }

} else {
  let prevDirection = reversed[1] - reversed[0];
  let count = 0;

  if (Math.abs(prevDirection) > 1) {
    count++;
  }
  for (let i = 1; i < reversed.length - 1; i++) {
    const newDirection = reversed[i + 1] - reversed[i];

    if (Math.abs(newDirection) > 1) {
      count++;
    }

    if (count > 1) {
      break;
    }

    prevDirection = newDirection;
  }

  if (count > 1) {
    console.log(bad);
  } else {
    console.log(good);
  }
}

