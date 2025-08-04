const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

for (let i = 0; i < input.length; i++) {
    const [name, age, weight] = input[i].split(' ')
    if (name === '#' && age === '0' && weight === '0') {
        break
    }

    const a = parseInt(age)
    const w = parseInt(weight)

    if (a > 17 || w >= 80) {
        console.log(`${name} Senior`)
    } else {
        console.log(`${name} Junior`)
    }
}