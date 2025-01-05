const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = parseInt(input);

const heart = [
  " @@@   @@@ ",
  "@   @ @   @",
  "@    @    @",
  "@         @",
  " @       @ ",
  "  @     @  ",
  "   @   @   ",
  "    @ @    ",
  "     @     "
];

const output = heart.join('\n') + '\n';
console.log(output.repeat(N));