const [[N, M], ...melody] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const stacks = Array.from(Array(7), () => []);
let answer = 0;

for (const [line, fret] of melody) {
    const stack = stacks[line];
    if (stack.length === 0) {
        stack.push(fret);
        answer++;
    } else {
        let topFret = stack.at(-1);
        while (topFret > fret) {
            stack.pop();
            topFret = stack.at(-1);
            answer++;
        }

        if (fret !== topFret) {
            stack.push(fret);
            answer++;
        }
    }    
}
console.log(answer)