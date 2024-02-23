const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const N = +input;


for (let i = 1; i <= N; i++) {
    let str = '';
    for (let j = 0; j < N - i; j++) {
        str += ' ';
    }

    for (let j = 0; j < i; j++) {
        str += '*';
    }

    console.log(str);
}
  