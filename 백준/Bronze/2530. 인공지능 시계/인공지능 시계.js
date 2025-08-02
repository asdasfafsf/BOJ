const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let [A, B, C] = input[0].split(' ').map(Number)
let D = Number(input[1])

let totalSeconds = A * 3600 + B * 60 + C + D

let newHour = Math.floor(totalSeconds / 3600) % 24
let newMinute = Math.floor((totalSeconds % 3600) / 60)
let newSecond = totalSeconds % 60

console.log(`${newHour} ${newMinute} ${newSecond}`)