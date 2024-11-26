const [[N], ...participants] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(line => line.split(' '));

const eligible = participants
    .filter(([name, enrollment, icpcStatus, shakeRank]) => {
        if (enrollment !== 'jaehak') return false;
        if (icpcStatus === 'winner') return false;
        if (shakeRank !== '-1' && +shakeRank <= 3) return false;
        return true;
    })
    .sort((a, b) => +a[4] - +b[4])
    .slice(0, 10)
    .map(participant => participant[0])
    .sort();

console.log(eligible.length);
console.log(eligible.join('\n'));
