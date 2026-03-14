const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let i = 0
let out = []

while(true){
    let n = Number(input[i++])
    if(n === 0) break

    let best = input[i++]

    for(let j=1;j<n;j++){
        let w = input[i++]
        if(w.toLowerCase() < best.toLowerCase()) best = w
    }

    out.push(best)
}

console.log(out.join('\n'))