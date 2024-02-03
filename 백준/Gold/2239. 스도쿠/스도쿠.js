const map = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split('').map(Number));

const points = [];

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (map[i][j] === 0) {
            points.push([i, j]);
        }
    }
}


const check = (y, x, value) => {
    // 가로방향 체크
    for (let i = 0; i < 9; i++) {
        if (map[y][i] === value) {
            return false;
        }
    }

    // 세로방향 체크
    for (let i = 0; i < 9; i++) {
        if (map[i][x] === value) {
            return false;
        }
    }

    // 스도쿠 영역 체크
    let startY = y === 0 ? 0 : Math.floor(y / 3) * 3;
    let startX = x === 0 ? 0 : Math.floor(x / 3) * 3;

    for (let i = startY; i < startY + 3; i++) {
        for (let j = startX; j < startX + 3; j++) {
            if (map[i][j] === value) {
                return false;
            }
        } 
    }

    return true;
}


const recursion = (depth) => {
    if (depth === points.length - 1) {
        console.log(map.map(elem => elem.join('')).join('\n'));
        process.exit(0);
    }
    const [y, x] = points[depth + 1];

    for (let i = 1; i < 10; i++) {
        if (!check(y, x, i)) {
            continue;
        }

        map[y][x] = i;
        recursion(depth + 1);
        map[y][x] = 0;
    }
}


for (const value of [1,2,3,4,5,6,7,8,9]) {
    const [y, x] = points[0];
    if (!check(y, x, value)) {
        continue;
    }
    map[y][x] = value;
    recursion(0, value);
    map[y][x] = 0;
}