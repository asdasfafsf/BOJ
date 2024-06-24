
const [[N], ...schedules] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
    .trim()
	.split('\n')
    .map(elem => elem.split(' ').map(Number));



schedules.sort((a, b) => {
    if (a[1] === b[1]) {
        return b[0] - a[0];
    }

    return b[1] - a[1];
})

let current = schedules[0][1];
for (let i = 0; i < schedules.length; i++) {
    const [time, limit] = schedules[i];

    if (current - limit > 0) {
        current -= (current - limit);
    }

    current -= time;
}


if (current < 0) {
    console.log(-1)
} else {
    console.log(current)
}