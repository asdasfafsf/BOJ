const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

let T = +input[0];
let idx = 1;

while (T--) {
    const board = [];
    for (let i = 0; i < 3; i++) {
        board.push(input[idx++].split('').map(c => c === '*' ? 1 : 0));
    }

    let min = Infinity;

    for (let bit = 0; bit < (1 << 9); bit++) {
        const tmp = board.map(row => [...row]);
        let cnt = 0;

        for (let i = 0; i < 9; i++) {
            if (bit & (1 << i)) {
                cnt++;
                const x = Math.floor(i / 3);
                const y = i % 3;

                const dx = [0, -1, 1, 0, 0];
                const dy = [0, 0, 0, -1, 1];

                for (let d = 0; d < 5; d++) {
                    const nx = x + dx[d];
                    const ny = y + dy[d];
                    if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {
                        tmp[nx][ny] ^= 1;
                    }
                }
            }
        }

        let allWhite = true;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tmp[i][j] === 1) {
                    allWhite = false;
                }
            }
        }

        if (allWhite) {
            min = Math.min(min, cnt);
        }
    }

    console.log(min);
}