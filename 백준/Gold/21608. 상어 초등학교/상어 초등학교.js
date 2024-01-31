const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim().split(' ').map(Number));



const students = []
const pointer = Array.from({length: Math.pow(N, 2) + 1}, () =>-1)
const likesList = Array.from({length: Math.pow(N, 2) + 1}, () => []);

for (const [studentNo, ...list] of arr) {
    likesList[studentNo] = list;
    // console.log(list)
    students.push(studentNo);
}
// console.log(arr)


// console.log(likesList)
const map = Array.from({length: N}, () => Array.from({length: N}, () => -1));


/**
 * 근처에 있는지
 * @param {*} y1 
 * @param {*} x1 
 * @param {*} y2 
 * @param {*} x2 
 * @returns 
 */
const isNearby = (y1, x1, y2, x2) => (Math.abs(y1 - y2) + Math.abs(x1 - x2) === 1);

const getNearbyPointsFromDistance = (targetNearbyPoints) => {
    let realNearbyPoints = [];
    if (targetNearbyPoints.length > 1) {
        let maxLength = 0;
        for (const {y, x} of targetNearbyPoints) {
            let nearbyPoints = getNearbyPoints(y, x);
            if (maxLength < nearbyPoints.length) {
                maxLength = nearbyPoints.length;
                realNearbyPoints = [{y, x}];
            } else if (maxLength === nearbyPoints.length) {
                realNearbyPoints.push({y, x});
            }
        }
    } else {
        realNearbyPoints = targetNearbyPoints;
    }

    return realNearbyPoints;
}


/**
 * 최소를 구함
 * @param {*} realNearbyPoints 
 * @returns 
 */
const getMinPoint = (realNearbyPoints) => {
    let minY = N;
    let minX = N;
    for (const {y, x} of realNearbyPoints) {
        if (y < minY) {
            minY = y;
            minX = x;
        } else if (y === minY && x < minX) {
            minX = x;
            minY = y;
        }
    }

    return {y: minY, x: minX};
}

/**
 * 친구 없을 때 좌표 구함
 * @returns 
 */
const getNearbyPointsFromEmpty = () => {
    let targetNearbyPoints = [];
    let max = 0;
    for (let y = 0; y < N; y++) {
        for(let x = 0; x < N; x++) {
            if (map[y][x] !== -1) {
                continue;
            }

            const nearbyPoints = getNearbyPoints(y, x);

            if (max < nearbyPoints.length) {
                targetNearbyPoints = [{y, x}];
                max = nearbyPoints.length;
            } else if (max === nearbyPoints.length) {
                targetNearbyPoints.push({y, x});
            }
        }
    }

    return targetNearbyPoints;
}


/**
 * 입력된거 기준으로 근처에 있는 좌표 구함
 * @param {*} y 
 * @param {*} x 
 * @returns 
 */
const getNearbyPoints = (y, x) => {
    const nearbyPoints = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] !== -1 || (y === i && x === j)) {
                continue;
            }

            if (isNearby(y, x, i, j)) {
                nearbyPoints.push({y: i, x: j});
            }
        }
    }

    return nearbyPoints;
}

/**
 * 근처에 친한친구 구함
 * @param {*} y 
 * @param {*} x 
 * @returns 
 */
const getNearbyLikes = (y, x, loves) => {
    const likes = loves ?? likesList[map[y][x]];
    const result = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (y === i && j === x) {
                continue;
            }

            if (isNearby(y, x, i, j) && likes.find((elem) => map[i][j] === elem)) {
                result.push({y: i, x: j});
            }
        }
    }

    return result;
}


// 초기 세팅
map[1][1] = students[0];

// N이 3보다 같거나 크므로 무조건 1,1 에서 시작함
pointer[students[0]] = {y : 1, x : 1};

for (let i = 1; i < students.length; i++) {
    const studentNo = students[i];
    const likes = likesList[studentNo]; 

 
    const scores = Array.from({length: N}, () => Array.from({length: N}, () => 0))
    let targetNearbyPoints = [];
    let maxScore = 0;


    let maxLength = 0;
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {

            if (map[r][c] !== -1) {
                continue;
            }

            const nearbyPoints = getNearbyLikes(r, c, likes);

            if (maxLength < nearbyPoints.length) {
                targetNearbyPoints = [{y: r, x: c}];
                maxLength = nearbyPoints.length;
            } else if (maxLength === nearbyPoints.length) {
                targetNearbyPoints.push({y: r, x: c});
            }

        }
    }


    let realNearbyPoints = [];

    if (targetNearbyPoints.length > 1) {
        let maxLength = 0;
        for (const {y, x} of targetNearbyPoints) {
            let nearbyPoints = getNearbyPoints(y, x);
            if (maxLength < nearbyPoints.length) {
                maxLength = nearbyPoints.length;
                realNearbyPoints = [{y, x}];
            } else if (maxLength === nearbyPoints.length) {
                realNearbyPoints.push({y, x});
            }
        }
    } else {
        realNearbyPoints = targetNearbyPoints;
    }


    // 가장 인접한 칸이 많은걸 구함
    if (realNearbyPoints.length === 0) {
        targetNearbyPoints = getNearbyPointsFromEmpty();
    }

    if (targetNearbyPoints.length > 1) {
        realNearbyPoints = getNearbyPointsFromDistance(targetNearbyPoints)
    } else {
        realNearbyPoints = targetNearbyPoints;
    }

    let minY = realNearbyPoints[0].y;
    let minX = realNearbyPoints[0].x;

    if (realNearbyPoints.length > 2) {
        const {y, x} = getMinPoint(realNearbyPoints);
        minY = y;
        minX = x;
    } 

    map[minY][minX] = studentNo;
    pointer[studentNo] = {y: minY, x: minX};
    // console.log(map.map(elem => elem.join('   ')).join('\n'));
    // console.log()
}

let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const nearbyLikes = getNearbyLikes(i, j);
        if (nearbyLikes.length > 0) {
            answer += Math.pow(10, nearbyLikes.length - 1);
        }
    }
}

console.log(answer)