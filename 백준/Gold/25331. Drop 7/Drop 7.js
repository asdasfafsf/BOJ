const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const [size] = input.pop();
const print = map =>
  console.log(map.map(row => row.join(' ')).join('\n'))
const init = (size, x, map) => {
    let y = -1;

    while (y + 1 < map.length) {
        if (map[y + 1][x] === 0) {
            y++;
        } else {
            break;
        } 
    }

    map[y][x] = size;
} 

const boom = map => {
    const target = [];

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 0) {
                continue;
            }

            let val = map[y][x];

            let lx = x;
            while (lx - 1 >= 0 && map[y][lx - 1] !== 0) {
                lx--;
            }
            let rx = x;
            while (rx + 1 < map[y].length && map[y][rx + 1] !== 0) {
                rx++;
            }
            let row = rx - lx + 1;

            let uy = y;
            while (uy - 1 >= 0 && map[uy - 1][x] !== 0) {
                uy--;
            }
            let dy = y;
            while (dy + 1 < map.length && map[dy + 1][x] !== 0) {
                dy++;
            }
            let col = dy - uy + 1;

            if (val === row || val === col) {
                target.push([y, x]);
            }
        }
    }

    for (const [y, x] of target) {
        map[y][x] = 0;
    }

    return target.length;
}

const drop = map => {
    let count = 0;
    for (let x = 0; x < map.length; x++) {
        let tmpY = map.length - 1;
        for (let y = map.length - 1; y >= 0; y--) {
            if (map[y][x] !== 0) {
                if (tmpY !== y) {
                    map[tmpY][x] = map[y][x];
                    map[y][x] = 0;
                    count++;
                }
                tmpY--;
            }
        }
    }
    return count;
}


const calc = map => {
    let count = 0;
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] !== 0) {
                count++;
            }
        }
    }

    return count;
}

let answer = Infinity;
for (let x = 0; x < 7; x++) {
    const map = input.map(elem => [...elem]);


    let isChanged = false;
    init(size, x, map);

    do {
        const a = boom(map);
        const b = drop(map);
        isChanged = a > 0 || b > 0;
    } while (isChanged);


    answer = Math.min(calc(map), answer);
}


console.log(answer);