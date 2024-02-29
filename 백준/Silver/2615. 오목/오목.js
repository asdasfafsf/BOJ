const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));




const dp = [[0, 1], [1, 0], [-1, 1], [1, 1]]

const canOmok = (y, x, d) => {
    const [dy, dx] = dp[d];
    const [ny, nx] = [y + dy * 4, x + dx * 4];

    return ny < 19 && ny >= 0 && nx < 19 && nx >= 0;
}

let ry = 0;
let rx = 0;
let rs = 0;

for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {

        let stone = input[y][x];

        if (stone === 0) {
            continue;
        }

        for (let d = 0; d < dp.length; d++) {
            if (!canOmok(y, x, d)) {
                continue;
            }

            let count = 1;
            const [dy, dx] = dp[d];

            for (let n = 1; n < 5; n++) {
                const [ny, nx] = [(dy * n) + y, (dx * n) + x];

                if (input[ny][nx] === stone) {
                    count++;
                }
            }

            if (count === 5) {
                const [ny, nx] = [dy * 5 + y, dx * 5 + x];

                if (ny >= 0 && nx >= 0 && nx < 19 && ny < 19 && input[ny][nx] === stone) {
                    continue;
                }

                const [fny, fnx] = [dy * -1 + y, dx * -1 + x];

                if (fny >= 0 && fnx >= 0 && fnx < 19 && fny < 19 && input[fny][fnx] === stone) {
                    continue;
                }


                ry = y + 1;
                rx = x + 1;
                rs = stone;
                console.log(stone);
                console.log(y + 1, x + 1);
                process.exit(0);
            }
        }
    }
}


if (rs === 0) {
    console.log(0)
}