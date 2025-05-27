const [abbr] = require('fs').readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const map = {
  NLCS: 'North London Collegiate School',
  BHA: 'Branksome Hall Asia',
  KIS: 'Korea International School',
  SJA: 'St. Johnsbury Academy'
};
console.log(map[abbr]);