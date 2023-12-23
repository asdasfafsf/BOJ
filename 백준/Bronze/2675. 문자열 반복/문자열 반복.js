const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



const answer = [];
for (let i = 1; i < input.length; i++) {
    const [count, str] = input[i].split(' ');
    let result = '';

    for (let j = 0; j < str.length; j++) {
        result += Array.from({length: +count}, () => str.charAt(j)).join('');   
    }

    answer.push(result);
}
console.log(answer.join('\n'))