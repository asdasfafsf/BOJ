
const [[N, M], ...board] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const BLACK = -1;
const RAINBOW = 0;
const EMPTY = -2;

const isOk = (y, x) => y < N && y > -1 && x < N && x > -1;
const isConnected = (x1, y1, x2, y2) => ((Math.abs(x1 - x2) + Math.abs(y1 - y2))) === 1

const findArea = board => {
    const areas = [];
    const visited = Array.from(Array(N), () => Array(N).fill(false));

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (visited[y][x]) {
                continue;
            }

            if (board[y][x] < 1) {
                continue;
            }

            const queue = [[y, x]];
            visited[y][x] = true;
            const rainbows = [];
            let current = 0

            const CURRENT_COLOR = board[y][x];

            while (queue.length !== current) {
                const [cy, cx] = queue[current];

                for (const [dy, dx] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                    const [ny, nx] = [dy + cy, dx + cx];

                    if (!isOk(ny, nx)) {
                        continue;
                    }

                    if (visited[ny][nx]) {
                        continue;
                    }



                    if (board[ny][nx] !== RAINBOW && board[ny][nx] !== CURRENT_COLOR) {
                        continue;
                    }

                    if (board[ny][nx] === RAINBOW) {
                        rainbows.push([ny, nx]);
                    }

                    queue.push([ny, nx]);
                    visited[ny][nx] = true;
                }

                current++;
            }


            if (queue.length >= 2) {
                const standard = queue
                    .filter(([y, x]) => board[y][x] !== RAINBOW)
                    .reduce((min, [y, x]) => {
                        if (y < min.y || (y === min.y && x < min.x)) {
                            return { y, x };
                        }
                        return min;
                    }, { y: N, x: N });

                areas.push({
                    queue,
                    rainbowCount: rainbows.length,
                    standard
                });
            }
 
            while (rainbows.length) {
                const [y, x] = rainbows.pop();
                visited[y][x] = false;
            }
        }
    }

    const sorted = areas
        .filter(elem => elem.queue.length >= 2)
        .sort((a, b) => {
            if (a.queue.length !== b.queue.length) {
                return b.queue.length - a.queue.length;
            }
            
            if (a.rainbowCount !== b.rainbowCount) {
                return b.rainbowCount - a.rainbowCount;
            }
        
            if (a.standard.y !== b.standard.y) {
                return b.standard.y - a.standard.y;
            }
            if (a.standard.x !== b.standard.x) {
                return b.standard.x - a.standard.x;
            }
            return 0;
        })
    return sorted[0];
}

const remove = (queue, board) => {
    for (const [y, x] of queue) {
        board[y][x] = EMPTY;
    }
}


const gravity = board => {
    for (let x = 0; x < N; x++) {
        let emptyY = N - 1
        for (let y = N -1; y >=0; y--){
            if (board[y][x] === EMPTY){
                continue
            }
            if (board[y][x] !== BLACK){
                if (y !== emptyY){
                    board[emptyY][x] = board[y][x]
                    board[y][x] = EMPTY
                }
                emptyY--
            }
            else{
                emptyY = y -1
            }
        }
    }
}

const rotate = board => {
    const tmpBoard = board.map(elem => elem.map(elemElem => elemElem));

    let y = 0;

    for (let tmpX = N - 1; tmpX >= 0; tmpX--) {
        let x = 0;
        for (let tmpY = 0; tmpY < N; tmpY++) {
            board[y][x] = tmpBoard[tmpY][tmpX];
            x++;
        }
        y++;
    }
}

const print = board => console.log(board.map(elem => elem.map(elem => elem.toString().padEnd(5, ' ')).join(' ')).join('\n'))

let answer = 0;

while (true) {
    const area = findArea(board);

    if (!area) {
        break;
    }

    // console.log(area)
    // print(board)
    const queue = area.queue;
    answer += Math.pow(queue.length, 2);
    // print(queue)
    // console.log()
    remove(queue, board);
    // print(board)
    // console.log()
    gravity(board)
    // print(board)
    // console.log()
    rotate(board);
    // print(board)
    // console.log()
    gravity(board);
    // print(board)
    // console.log()
    // console.log(answer)
    // console.log('------------------')


}

console.log(answer)
