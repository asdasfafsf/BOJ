const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .split('\n');

const N = +input[0];

const dp = [
    [0, 0], [-1, 1], [0, 1], [1, 1], [1, 0], 
    [1, -1], [0, -1], [-1, -1], [-1, 0]
];
const bacterias = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

function getMeetingTime(bacteria1, bacteria2) {
    const [x1, y1, d1] = bacteria1;
    const [x2, y2, d2] = bacteria2;
    const [dx1, dy1] = dp[d1];
    const [dx2, dy2] = dp[d2];

    if (d1 === d2) return [-1, -1, -1];

    const timeY = (y2 - y1) / (dy1 - dy2);
    const timeX = (x2 - x1) / (dx1 - dx2);

    if (dy1 === dy2) {
        if (timeX > 0 && timeX === Math.floor(timeX) && y1 + timeX * dy1 === y2 + timeX * dy2) {
            return [timeX, x1 + timeX * dx1, y1 + timeX * dy1];
        }
        return [-1, -1, -1];
    } else if (dx1 === dx2) {
        if (timeY > 0 && timeY === Math.floor(timeY) && x1 + timeY * dx1 === x2 + timeY * dx2) {
            return [timeY, x1 + timeY * dx1, y1 + timeY * dy1];
        }
        return [-1, -1, -1];
    }

    if (timeX === timeY && timeX > 0 && timeX === parseInt(timeX) && y1 + timeX * dy1 === y2 + timeX * dy2) {
        return [timeY, x1 + timeY * dx1, y1 + timeY * dy1];
    }

    return [-1, -1, -1];
}


const times = {};
const counts = {};
const answer = [-1, -1];
let count = 0;

for (let i = 0; i < bacterias.length; i++) {
    count++;
    for (let j = i + 1; j < bacterias.length; j++) {
        const [time, x, y] = getMeetingTime(bacterias[i], bacterias[j]);

        if (time > 0 && isFinite(time)) {
            const key = `${time},${x},${y}`;

           
            if (times[time] !== count) {
                times[time] = count;
                counts[time] = 2;
            } else {
                counts[time]++;
            }


            if (answer[0] < counts[time]) {
                answer[0] = counts[time];
                answer[1] = time;
            } else if (answer[0] === counts[time]) {
                answer[1] = Math.min(answer[1], time);
            }
        }
    }
}

// console.log(times)

console.log(answer.join('\n'));