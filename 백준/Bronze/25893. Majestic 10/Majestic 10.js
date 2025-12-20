const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const n = parseInt(input[0])
const results = []

for (let i = 1; i <= n; i++) {
    const stats = input[i].split(' ').map(Number)
    const doubles = stats.filter(s => s >= 10).length
    
    const messages = ['zilch', 'double', 'double-double', 'triple-double']
    
    results.push(stats.join(' '))
    results.push(messages[doubles])
    results.push('')
}

console.log(results.join('\n'))