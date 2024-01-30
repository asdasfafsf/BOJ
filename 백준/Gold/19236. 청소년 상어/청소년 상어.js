const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const dp = [[-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
const map = Array.from({length : 4}, () => Array.from({length: 4}, () => -1));
const fishes = Array.from({length : 17}, () => undefined);

for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x+=2 ) {
        const [fishNo, fishDir] = [input[y][x], input[y][x + 1]];

        map[y][x / 2] = fishNo;
        fishes[fishNo] = {
            y,
            x: x / 2,
            dir: fishDir - 1,
            eaten: false,
        }
    }
}



const firstFishNo = map[0][0];
const firstFish = fishes[firstFishNo];
firstFish.eaten = true;

let answer = firstFishNo;
map[0][0] = -1;


const isOver = (y, x) => x > 3 || x < 0 || y > 3 || y < 0;
const move = (y, x, dir, value, currentMap, currentFishes) => {
    answer = Math.max(answer, value);

    let fishes = currentFishes.map(elem => elem ? JSON.parse(JSON.stringify(elem)): elem);
    let map = currentMap.map(elem => elem.map(elem => elem));

    for (let i = 1; i < fishes.length; i++) {
        const fish = fishes[i];

        if (fish.eaten === true) {
            continue;
        } 

        const fishDir = fish.dir;

        // 현재방향부터 시작하여 반시계방향으로 갈 수 있는 방향 탐색
        for (let d = 0; d < 8; d++) {
            const [dy, dx] = dp[(fishDir + d) % 8];
            const [ny, nx] = [dy + fish.y, dx + fish.x];

            // 상어가 있는 방향으로는 움직이지 않는다
            if (ny === y && nx === x) {
                continue;
            }

            // 맵 밖으로 나가는 경우에도 반시계 방향으로 회전한다.
            if (isOver(ny, nx)) {
                continue;
            }
       
            const targetFishNo = map[ny][nx];

            // 이동하려는 자리에 물고기가 있다면
            if (targetFishNo !== -1) {
                // 해당 물고기와 위치를 바꾼다.
                const targetFish = fishes[targetFishNo];
                map[fish.y][fish.x] = targetFishNo;
                // map[ny][nx] = i;

                targetFish.y = fish.y;
                targetFish.x = fish.x;
            } else {
                map[fish.y][fish.x] = -1;
            }
            
            map[ny][nx] = i;
            fish.y = ny;
            fish.x = nx;
            fish.dir = (fishDir + d) % 8;
            break;
        }
    }


    // 물고기의 이동이 끝났으면 상어가 식사를 시작함
    for (let dist = 1; dist < 4; dist++) {
        const [dy, dx] = dp[dir];
        const [ny, nx] = [dy * dist + y, dx * dist + x];

        // 지형 밖이라면
        if (isOver(ny, nx)) {
            continue;
        }

        const targetFishNo = map[ny][nx];


        // 물고기가 없음
        if (targetFishNo === -1) {
            continue;
        }

        const targetFish = fishes[targetFishNo];

        // // 이미 먹힌 물고기라면 == 필요없는이유 맵에서 업데이트를 해주기 때문
        // if (targetFish.eaten === true) {
        //     continue;
        // }

        map[ny][nx] = -1;
        targetFish.eaten = true;
        move(targetFish.y, targetFish.x, targetFish.dir, targetFishNo + value, map, fishes);
        map[ny][nx] = targetFishNo;
        targetFish.eaten = false;
    }
}


move(firstFish.y, firstFish.x, firstFish.dir, firstFishNo, map, fishes);

console.log(answer)