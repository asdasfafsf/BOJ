const [N, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = [];
const used = new Map();

for (const element of arr) {
    let isFind = false;
    const strs = element.split(' ');

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const piece = str.charAt(0).toLowerCase();

        if (!used.has(piece)) {
            used.set(piece, true);
            strs[i] = `[${str.charAt(0)}]${str.slice(1)}`;
            isFind = true;
            break;
        }
    }

    if (!isFind) {
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];

            for (let j = 1; j < str.length; j++) {
                const piece = str.charAt(j).toLowerCase();
                if (!used.has(piece)) {
                    used.set(piece, true);
                    strs[i] = `${str.slice(0, j)}[${str.charAt(j)}]${str.slice(j + 1)}`;
                    isFind = true;
                    break;
                }
            }

            if (isFind) {
                break;
            }
        }
    }

    answer.push(strs.join(' '));
}

console.log(answer.join('\n'))