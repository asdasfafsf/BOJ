let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}


for (let i = 0; i < numbers.length; i++) {
    const H = parseInt(numbers[i][0]);
    const W = parseInt(numbers[i][1]);
    const N = parseInt(numbers[i][2]);

    let ho = (Math.floor((N - 1) / H)) + 1;
    let floor = ((N - 1) % H) + 1;

    if (ho < 10) {
        ho = '0' + ho
    }

    console.log(`${floor}${ho}`);
    
}