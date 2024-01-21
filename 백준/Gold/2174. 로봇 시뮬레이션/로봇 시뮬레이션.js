
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



const [A, B] = input[0].split(' ').map(Number);
const [N, M] = input[1].split(' ').map(Number);



function Robot(y, x, d, num) {
    this.y = y;
    this.x = x;
    this.d = d;
    this.num = num;
}

const area = Array.from({length: B}, () => Array.from({length: A}, () => 0))
const dp = [[1, 0], [0, -1], [-1, 0], [0, 1]];
const dMap = {
    'N': 0,
    'W': 1,
    'S': 2,
    'E': 3,
}

const robots = [0];

for (let i = 2; i < input.length - M; i++) {
    const [x, y, d] = input[i].split(' ');
    robots.push(new Robot(y - 1, x - 1, dMap[d], robots.length));
    area[y - 1][x - 1] = robots.at(-1);
}

let answer = 'OK'
for (let i = N + 2; i < input.length; i++) {
    const [robotNum, behavior, reps] = input[i].split(' ');
    const targetRobot = robots[+robotNum];

    // console.log(area)
    // console.log(robotNum, behavior, reps)

    if (behavior === 'F') {
        let y = targetRobot.y;
        let x = targetRobot.x;
        let d = targetRobot.d;
        const [dy, dx] = dp[d];

        for (let j = 0; j < +reps; j++) {
            y += dy;
            x += dx;

            if (y < 0 || y >= B || x < 0 || x >= A) {
                answer = `Robot ${robotNum} crashes into the wall`;
                break;
            } else if (area[y][x] !== 0) {
                answer = `Robot ${robotNum} crashes into robot ${area[y][x].num}`;
                break;
            }
        }

        if (answer === 'OK') {
            area[targetRobot.y][targetRobot.x] = 0;
            area[y][x] = targetRobot;
            targetRobot.y = y;
            targetRobot.x = x;
        }
    } else if (behavior === 'L') {
        targetRobot.d = (targetRobot.d + (1 * reps)) % 4;
    } else if (behavior === 'R') {
        targetRobot.d = (targetRobot.d + (3 * reps)) % 4;
    }


    if (answer !== 'OK') {
        break;
    }
}
// console.log(area)

console.log(answer);