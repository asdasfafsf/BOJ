const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const weight = parseFloat(input[0])
const height = parseFloat(input[1])

const bmi = weight / (height * height)

if (bmi > 25) {
    console.log("Overweight")
} else if (bmi >= 18.5 && bmi <= 25.0) {
    console.log("Normal weight")
} else {
    console.log("Underweight")
}