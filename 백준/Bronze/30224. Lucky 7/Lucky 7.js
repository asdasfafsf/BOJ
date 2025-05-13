const n = +require('fs').readFileSync(0, 'utf-8').trim();

const has7 = n.toString().includes('7');
const div7 = n % 7 === 0;

if (!has7 && !div7) console.log(0);
else if (!has7 && div7) console.log(1);
else if (has7 && !div7) console.log(2);
else console.log(3);