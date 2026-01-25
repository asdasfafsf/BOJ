const fs = require('fs');

const nums = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let rects = [];
for (let i = 0; i < 16; i += 4) {
    rects.push([nums[i], nums[i + 1], nums[i + 2], nums[i + 3]]);
}

let covered = Array.from({ length: 101 }, () => Array(101).fill(false));

for (const [x1, y1, x2, y2] of rects) {
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            covered[x][y] = true;
        }
    }
}

let ans = 0;
for (let x = 1; x <= 100; x++) {
    for (let y = 1; y <= 100; y++) {
        if (covered[x][y]) ans++;
    }
}

console.log(ans.toString());