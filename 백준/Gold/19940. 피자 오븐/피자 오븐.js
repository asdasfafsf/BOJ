
const [T, ...testCases] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);


const answers = [];
for (const testCase of testCases) {
    const answer = Array.from({length: 5}, () => 0);

    let sixties = Math.floor(testCase / 60);
    let tens = Math.floor((testCase % 60) / 10);
    let digits = testCase % 10;

    if (digits > 5) {
        tens++;
        digits -= 10;
    }

    if (tens > 3) {
        sixties++;
        tens -= 6;
    }

    if (tens < 0 && digits === 5) {
        tens++;
        digits -= 10;
    }
    
    answer[0] = sixties;
    answer[tens < 0 ? 2 : 1] = Math.abs(tens);
    answer[digits < 0 ? 4 : 3] = Math.abs(digits);
    
    answers.push(answer.join(' '))
}

console.log(answers.join('\n'));