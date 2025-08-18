const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

for (let w of input) {
    if (w < 0) break;
    const moon = w * 0.167;
    console.log(`Objects weighing ${w.toFixed(2)} on Earth will weigh ${moon.toFixed(2)} on the moon.`);
}