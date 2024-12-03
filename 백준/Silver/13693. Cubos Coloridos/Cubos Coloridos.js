const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

let index = -1;

const normalize = cube => {
    const rotations = [
        [0, 1, 2, 3, 4, 5],
        [0, 1, 5, 4, 2, 3],
        [0, 1, 3, 2, 5, 4],
        [0, 1, 4, 5, 3, 2],
        [2, 3, 1, 0, 4, 5],
        [2, 3, 5, 4, 1, 0],
        [2, 3, 0, 1, 5, 4],
        [2, 3, 4, 5, 0, 1],
        [5, 4, 2, 3, 0, 1],
        [5, 4, 1, 0, 2, 3],
        [5, 4, 3, 2, 1, 0],
        [5, 4, 0, 1, 3, 2],
        [3, 2, 1, 0, 5, 4],
        [3, 2, 4, 5, 1, 0],
        [3, 2, 0, 1, 4, 5],
        [3, 2, 5, 4, 0, 1],
        [4, 5, 2, 3, 1, 0],
        [4, 5, 0, 1, 2, 3],
        [4, 5, 3, 2, 0, 1],
        [4, 5, 1, 0, 3, 2],
        [1, 0, 2, 3, 5, 4],
        [1, 0, 4, 5, 2, 3],
        [1, 0, 3, 2, 4, 5],
        [1, 0, 5, 4, 3, 2],
    ];
    const result = [];

    for (const rotation of rotations) {
        const newCube = Array(rotation.length);
        for (let i = 0; i < newCube.length; i++) {
            newCube[i] = cube[rotation[i]];
        }
        result.push(newCube.join(''));
    }

    return result.sort()[0];
};

while (true) {
    const N = +input[++index];
    if (!N) {
        break;
    }
    const cubeSet = new Set();
    for (let i = 0; i < N; i++) {
        const cube = [];
        cube.push(+input[++index]);
        cube.push(...input[++index].split(' ').map(Number));
        cube.push(+input[++index]);

        const cubeFaces = [
            cube[0],
            cube[5],
            cube[2],
            cube[4],
            cube[1],
            cube[3],
        ];

        const normalized = normalize(cubeFaces);
        cubeSet.add(normalized);
    }

    console.log(cubeSet.size);
}