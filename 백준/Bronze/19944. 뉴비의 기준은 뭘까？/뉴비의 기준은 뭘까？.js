const fs = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);
const N = fs[0];
const M = fs[1];

if (M === 1 || M === 2) {
  console.log('NEWBIE!');
} else if (M <= N) {
  console.log('OLDBIE!');
} else {
  console.log('TLE!');
}