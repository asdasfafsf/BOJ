const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');




const N = +input[0];
const hall = input.slice(1).map(elem => elem.split(' '));
const teachers = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (hall[i][j] === 'T') {
            teachers.push([i, j]);
        }
    }
}


let answer = 'NO';

const setUp = (current, start) => {
    if (answer === 'YES') {
        return;
    }

    if (current === 3) {
        answer = find();
        return;
    }

    for (let i = start; i < N * N; i++) {
        const y = i % N;
        const x = Math.floor(i / N);

        if (hall[y][x] === 'X') {
            hall[y][x] = 'O';
            setUp(current + 1, i + 1);
            hall[y][x] = 'X';
        }
    }
}

const find = () => {
    for (const [teacherY, teacherX] of teachers) {
        for (let y = teacherY; y < N; y++) {
            if (hall[y][teacherX] === 'O') {
                break;
            } else if (hall[y][teacherX] === 'S') {
                return 'NO';
            }
        }

        for (let y = teacherY; y > -1; y--) {
            if (hall[y][teacherX] === 'O') {
                break;
            } else if (hall[y][teacherX] === 'S') {
                return 'NO';
            }
        }


        for (let x = teacherX; x < N; x++) {
            if (hall[teacherY][x] === 'O') {
                break;
            } else if (hall[teacherY][x] === 'S') {
                return 'NO';
            }
        }


        for (let x = teacherX; x > -1; x--) {
            if (hall[teacherY][x] === 'O') {
                break;
            } else if (hall[teacherY][x] === 'S') {
                return 'NO';
            }
        }
    }

    return 'YES';
}

setUp(0, 0);

console.log(answer)