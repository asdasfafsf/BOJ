const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const antenna = parseInt(input[0])
const eyes = parseInt(input[1])

if (antenna >= 3 && eyes <= 4) {
    console.log("TroyMartian")
}
if (antenna <= 6 && eyes >= 2) {
    console.log("VladSaturnian")
}
if (antenna <= 2 && eyes <= 3) {
    console.log("GraemeMercurian")
}