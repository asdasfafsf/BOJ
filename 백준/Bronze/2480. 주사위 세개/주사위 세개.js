const [dice1, dice2, dice3] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)


let prize = 0;

if (dice1 === dice2 && dice2 === dice3) {
    prize = 10000 + dice1 * 1000;
} else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
    if (dice1 === dice2 || dice1 === dice3) {
        prize = 1000 + dice1 * 100;
    } else {
        prize = 1000 + dice2 * 100;
    }
} else {
    let maxDice = Math.max(dice1, dice2, dice3);
    prize = maxDice * 100;
}

console.log(prize);
