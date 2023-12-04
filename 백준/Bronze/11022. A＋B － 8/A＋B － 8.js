require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
.toString()
.trim()
.split('\n')
.slice(1)
.map(elem => elem.split(' ').map(Number))
.forEach(([a, b], index) => console.log(`Case #${index + 1}: ${a} + ${b} = ${a + b}`));

