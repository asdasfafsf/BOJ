const fs = require('fs')

const [xStr, yStr] = fs.readFileSync(0,'utf8').trim().split(/\s+/)
const x = Number(xStr)
const y = Number(yStr)

const t = (y + x) % (2 * x)
console.log(t)