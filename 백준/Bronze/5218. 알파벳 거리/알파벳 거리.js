
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
    .trim()
	.split("\n")
    .slice(1)
    .map(elem => elem.split(' '))

const answer = [];

for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i];
    
    let tmp = '';
    for  (let c = 0; c < a.length; c++) {
        const ac = a.charCodeAt(c);
        const bc = b.charCodeAt(c);
        tmp += ' ' + (ac > bc ? (bc  + 26) - ac : bc - ac);
    }

    answer.push(`Distances:${tmp}`);
}

console.log(answer.join('\n'))