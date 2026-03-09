const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let idx = 0
let out = []

while (true) {
    let n = Number(input[idx++])
    if (n === 0) break

    let set = new Set()

    for (let i = 0; i < n; i++) {
        let arr = input[idx++].trim().split(/\s+/).map(Number)
        for (let j = 0; j < 6; j++) set.add(arr[j])
    }

    let ok = true
    for (let i = 1; i <= 49; i++) {
        if (!set.has(i)) {
            ok = false
            break
        }
    }

    out.push(ok ? 'Yes' : 'No')
}

console.log(out.join('\n'))