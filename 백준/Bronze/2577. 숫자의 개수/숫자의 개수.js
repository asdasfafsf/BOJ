const answer = Array.from({length: 10}, () => 0);

require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)
    .reduce((pv, cv) => pv * cv, 1)
    .toString()
    .split('')
    .forEach(elem => answer[+elem]++);


console.log(answer.join('\n'))