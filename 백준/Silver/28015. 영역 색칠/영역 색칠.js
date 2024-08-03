const [[N, M], ...picture] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' '));


let answer = 0;
for (let i = 0; i < picture.length; i++) {
    const areas = picture[i].join('')
        .split('0')
        .filter(elem => elem)
        .map(elem => elem.split('').map(Number));


    for (const area of areas) {
        const counts = [Infinity,0,0];
        let prev = -1;
        for (const color of area) {
            if (prev !== color) {
                counts[color]++;
            }

            prev = color
        }
        
        answer += Math.min(...counts) + 1
    }
}

console.log(answer)