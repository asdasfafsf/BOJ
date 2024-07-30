const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

input.shift();

const answer = [];

while (input.length) {
    const [n, k] = input.shift().split(' ').map(Number);
    const strs = input.shift().split(' ');

    const plateMap = new Map();
    let count = 0;

    for (const plate of strs) {
        let lowerPlate = '';
        let upperCaseCount = 0;

        for (let char of plate) {
            if (char >= 'A' && char <= 'Z') {
                upperCaseCount++;
                lowerPlate += String.fromCharCode(char.charCodeAt(0) + ('a'.charCodeAt(0) - 'A'.charCodeAt(0)));
            } else {
                lowerPlate += char;
            }
        }

        lowerPlate = lowerPlate.split('').sort().join('');
        const key = lowerPlate + ',' + upperCaseCount;

        if (plateMap.has(key)) {
            count += plateMap.get(key);
            plateMap.set(key, plateMap.get(key) + 1);
        } else {
            plateMap.set(key, 1);
        }
    }

    answer.push(count);
}

console.log(answer.join('\n'));