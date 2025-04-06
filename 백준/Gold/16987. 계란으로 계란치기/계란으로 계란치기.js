const [[N], ...eggs] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

let max = 0;

const recursion = (idx) => {
    if (idx === N) {
        let cnt = 0;
        for (let i = 0; i < N; i++) {
            if (eggs[i][0] <= 0) { 
                cnt++;
            }
        }
        max = Math.max(max, cnt);
        return;
    }

    if (eggs[idx][0] <= 0) {
        recursion(idx + 1);
        return;
    }

    let hit = false;

    for (let i = 0; i < N; i++) {
        if (i === idx || eggs[i][0] <= 0) {
            continue;
        }

        hit = true;
        eggs[idx][0] -= eggs[i][1];
        eggs[i][0] -= eggs[idx][1];

        recursion(idx + 1);

        eggs[idx][0] += eggs[i][1];
        eggs[i][0] += eggs[idx][1];
    }

    if (!hit) {
        recursion(idx + 1);
    }
};

recursion(0);
console.log(max);