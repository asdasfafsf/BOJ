const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const [N, W, H] = input[0];
const wifiList = input.slice(1);

const xIntervals = [];
const yIntervals = [];

for (let i = 0; i < N; i++) {
    const [x, y, w] = wifiList[i];
    const xStart = Math.max(x - w, 0);
    const xEnd = Math.min(x + w, W);
    xIntervals.push([xStart, xEnd]);

    const yStart = Math.max(y - w, 0);
    const yEnd = Math.min(y + w, H);
    yIntervals.push([yStart, yEnd]);
}

xIntervals.sort((a, b) => a[0] - b[0]);
yIntervals.sort((a, b) => a[0] - b[0]);

let currentEndX = 0;
let xCovered = false;
for (let i = 0; i < xIntervals.length; i++) {
    const [start, end] = xIntervals[i];
    if (start > currentEndX) {
        break;
    }
    currentEndX = Math.max(currentEndX, end);
    if (currentEndX >= W) {
        xCovered = true;
        break;
    }
}

let currentEndY = 0;
let yCovered = false;
for (let i = 0; i < yIntervals.length; i++) {
    const [start, end] = yIntervals[i];
    if (start > currentEndY) {
        break;
    }
    currentEndY = Math.max(currentEndY, end);
    if (currentEndY >= H) {
        yCovered = true;
        break;
    }
}

if (xCovered || yCovered) {
    console.log("Yes");
} else {
    console.log("No");
}