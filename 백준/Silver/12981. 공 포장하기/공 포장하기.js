
let [R, G, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
    .trim()
    .split(' ')
    .map(Number);

let min = Math.min(R, G, B);
let answer = min;
[R, G, B] = [R - min, G - min, B - min];

answer += Math.floor(R / 3) + Math.floor(G / 3) + Math.floor(B / 3)
R %= 3;
G %= 3;
B %= 3;

answer += Math.floor(R / 2) + Math.floor(G / 2) + Math.floor(B / 2)
R %= 2;
G %= 2;
B %= 2;

if (R + G + B === 1) {
    answer++;
} else if (R + G + B === 2) {
    answer++;
} else if (R + G + B === 3){
    answer += 2;
}

console.log(answer)