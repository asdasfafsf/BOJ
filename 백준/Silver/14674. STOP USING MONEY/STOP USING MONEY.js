const [[N, K], ...games] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const effectives = games.map(([i, c, h]) => {
    return [i, c, h, (h * 1000000) / c]
})

effectives.sort((a, b) => {
    if (a[3] === b[3]) {
        if (a[1] === b[1]) {
            return a[0] - b[0];   
        }
        return a[1] - b[1];
    } 

    return b[3] - a[3]
})

console.log(effectives.slice(0, K).map(elem => elem[0]).join('\n'))