const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


log = process.platform === 'linux' ? () => {}  : console.log
const [N, Q] = input[0].split(' ').map(Number);

const vBoxList = [];
const hBoxList = [];

for (let i = 1; i <= N; i++) {
    const [x, y, t] = input[i].split(' ').map(Number);
    vBoxList.push([x, y, t]);
    hBoxList.push([x, y, t]);
}

vBoxList.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
hBoxList.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

log(vBoxList);
log(hBoxList);

const sumX = [0];
const sumY = [0];

for (let i = 0; i < vBoxList.length; i++) {
    sumX.push(sumX.at(-1) + vBoxList[i][2]);
}

for (let i = 0; i < hBoxList.length; i++) {
    sumY.push(sumY.at(-1) + hBoxList[i][2]);
}

const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

let cx = 1;
let cy = 1;

function binarySearch(arr, value, compareIndex, isUpper, left = 0, right = arr.length) {
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const currentValue = arr[mid][compareIndex];

        if (isUpper) {
            if (currentValue <= value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else {
            if (currentValue < value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }
    return right;
}

let answer = 0;
for (let i = N + 1; i < input.length; i++) {
    log('-------------------------');
    const [d, dist] = input[i].split(' ').map(Number);
    const [dx, dy] = directions[d];
    const [nx, ny] = [cx + dx * dist, cy + dy * dist];

    log(`현재 좌표 x : ${cx} y : ${cy}`);
    log(`${d} 방향으로 ${dist}를 가야합니다.`);
    log(`목적지 x : ${nx} y : ${ny}`);
    log(`현재 점수 : ${answer}`);

    let startValue = 0; // 출발 지점의 아이템 값을 추출

    if (d === 0 || d === 2) { // x축 이동
        const yLower = binarySearch(hBoxList, Math.min(cy, ny), 1, false);
        const yUpper = binarySearch(hBoxList, Math.max(cy, ny), 1, true);
        const xLower = binarySearch(hBoxList, Math.min(cx, nx), 0, false, yLower, yUpper);
        const xUpper = binarySearch(hBoxList, Math.max(cx, nx), 0, true, yLower, yUpper);

        // log(`y 범위: ${yLower}-${yUpper}, x 범위: ${xLower}-${xUpper}`);
        // log(`y좌표 범위에서 선택된 값:`, hBoxList.slice(yLower, yUpper));
        // log(`x좌표 범위에서 선택된 값:`, hBoxList.slice(xLower, xUpper));

        // 출발 지점의 아이템 값 추출

        if (hBoxList[xLower] && hBoxList[xLower][0] === cx && hBoxList[xLower][1] === cy) {
            startValue = hBoxList[xLower][2];
        } else if (hBoxList[xUpper - 1] && hBoxList[xUpper - 1][0] === cx && hBoxList[xUpper - 1][1] === cy) {
            startValue = hBoxList[xUpper - 1][2];
        }

        answer += Math.abs(sumY[xUpper] - sumY[xLower]);
    } else { // y축 이동
        const xLower = binarySearch(vBoxList, Math.min(cx, nx), 0, false);
        const xUpper = binarySearch(vBoxList, Math.max(cx, nx), 0, true);
        const yLower = binarySearch(vBoxList, Math.min(cy, ny), 1, false, xLower, xUpper);
        const yUpper = binarySearch(vBoxList, Math.max(cy, ny), 1, true, xLower, xUpper);

        // log(`x 범위: ${xLower}-${xUpper}, y 범위: ${yLower}-${yUpper}`);
        // log(`x좌표 범위에서 선택된 값:`, vBoxList.slice(xLower, xUpper));
        // log(`y좌표 범위에서 선택된 값:`, vBoxList.slice(yLower, yUpper));

        // 출발 지점의 아이템 값 추출
        if (vBoxList[yLower] && vBoxList[yLower][0] === cx && vBoxList[yLower][1] === cy) {
            startValue = vBoxList[yLower][2];
        } else if (vBoxList[yUpper - 1] && vBoxList[yUpper - 1][0] === cx && vBoxList[yUpper - 1][1] === cy) {
            startValue = vBoxList[yUpper - 1][2];
        } 

        answer += Math.abs(sumX[yUpper] - sumX[yLower]);
    }

    log(`결과 점수 : ` + answer);
    answer -= startValue; // 출발 지점의 아이템 값 제외
    log(`출발지를 제외한 결과 점수 : ` + answer);
    cx = nx;
    cy = ny;
    log('-----------------------------\n\n');
}

console.log(answer);