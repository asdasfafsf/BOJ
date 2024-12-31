const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const appleWeight = 500;
const appleBoxWeight = 1000;
const pearWeight = 120;
const pearsPerBox = 50;
const applePrice = 4000;

let input = [];
rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const n = parseInt(input[0]);
    let totalMass = 0;
    let totalAppleValue = 0;

    for (let i = 1; i <= n; i++) {
        const [type, w, h, l] = input[i].split(' ');
        const width = parseInt(w);
        const height = parseInt(h);
        const length = parseInt(l);

        if (type === 'A') {
            const applesInBox = Math.floor(width / 12) * Math.floor(height / 12) * Math.floor(length / 12);
            const boxMass = appleBoxWeight + applesInBox * appleWeight;
            totalMass += boxMass;
            totalAppleValue += applesInBox * applePrice;
        } else if (type === 'B') {
            const boxMass = pearsPerBox * pearWeight;
            totalMass += boxMass;
        }
    }

    console.log(totalMass);
    console.log(totalAppleValue);
    process.exit();
});