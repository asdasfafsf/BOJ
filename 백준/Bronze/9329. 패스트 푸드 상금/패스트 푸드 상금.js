const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());



for (let i = 1; i < input.length;) {
    let sum = 0;
    const [n, m] = input[i].split(' ').map(Number);
    
    const rewards = [];

    for (let j = 0; j < n; j++) {
        const list = input[++i].split(' ').map(Number);
        rewards.push({
            amount: list.at(-1),
            list: list.slice(1,-1).map(elem => elem - 1)
        });
    }

    rewards.sort((a, b) => b.amount - a.amount);

    const stickers = input[++i].split(' ').map(Number);
 
    for (const reward of rewards) {
        const { amount, list } = reward;
  
        let min = Infinity;

        for (const elem of list) {
            min = Math.min(stickers[elem], min);
        }

        for (const elem of list) {
            stickers[elem] -= min;
        }
        sum += (min * amount);
    }
    i++;

    console.log(sum);
}