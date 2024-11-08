const [[N, M], ...tiles] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const RED = 0;
const PINK = 1;
const ORANGE = 2;
const BLUE = 3;
const PURPLE = 4;

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]]
const distWithoutOrange = tiles.map(row => row.map(() => Infinity));
const distWithOrange = tiles.map(row => row.map(() => Infinity));
distWithoutOrange[0][0] = 0;
const queue = [[0, 0, 0, false]];
let current = 0;

while (queue.length !== current) {
    const [y, x, currentDist, isOrange] = queue[current];
    const nextDist = currentDist + 1;

    for (const [dy, dx] of dp) {
        let nextOrange = isOrange;
        const [ny, nx] = [y + dy, x + dx];

        if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
            continue;
        }

        let slide = 0;
        let [destY, destX] = [ny, nx];

        if (tiles[ny][nx] === RED) {
            continue;
        } else if (tiles[ny][nx] === BLUE) {
            if (!nextOrange) {
                continue;
            }
        } else if (tiles[ny][nx] === ORANGE) {
            nextOrange = true;
        } else if (tiles[ny][nx] === PURPLE) {
            nextOrange = false;

            let sy = ny;
            let sx = nx;
            while (true) {
                sy += dy;
                sx += dx;

                if (sy < 0 || sy >= N || sx < 0 || sx >= M) {
                    break;
                }

                if (tiles[sy][sx] === RED) {
                    break;
                } else if (tiles[sy][sx] === BLUE) {
                    if (!nextOrange) {
                        break;
                    }
                } else if (tiles[sy][sx] === ORANGE) {
                    nextOrange = true;
                } else if (tiles[sy][sx] === PURPLE) {
                    nextOrange = false;
                }
                slide++;
                destY = sy;
                destX = sx;

                if (tiles[sy][sx] !== PURPLE) {
                    break;
                }
            }
        }

        if (destY === N - 1 && destX === M - 1) {
            if (nextOrange) {
                distWithOrange[destY][destX] = Math.min(distWithOrange[destY][destX], nextDist + slide);
            } else {
                distWithoutOrange[destY][destX] = Math.min(distWithoutOrange[destY][destX], nextDist + slide);
            }
            continue;
        }

        if (nextOrange) {
            if (distWithOrange[destY][destX] > nextDist + slide) {
                distWithOrange[destY][destX] = nextDist + slide;
                queue.push([destY, destX, nextDist + slide, nextOrange]);
            }
        } else {
            if (distWithoutOrange[destY][destX] > nextDist + slide) {
                distWithoutOrange[destY][destX] = nextDist + slide;
                queue.push([destY, destX, nextDist + slide, nextOrange]);
            }
        }
    }

    current++;
}
const result = Math.min(distWithoutOrange[N - 1][M - 1], distWithOrange[N - 1][M - 1]);
console.log(result === Infinity ? -1 : result);