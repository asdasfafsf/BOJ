const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const M = parseInt(input[0]);
let positions = [1, 2, 3];
for (let i = 1; i <= M; i++) {
    let [X, Y] = input[i].split(' ').map(Number);
    if (X === Y) continue;
    let indexX = positions.indexOf(X);
    let indexY = positions.indexOf(Y);
    [positions[indexX], positions[indexY]] = [positions[indexY], positions[indexX]];
}
console.log(positions[0]);