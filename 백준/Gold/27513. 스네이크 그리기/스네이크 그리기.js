const [n, m] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const answer = [];


if (m % 2 === 0) {
    for (let x = 1; x <= n; x++) {
        answer.push(`${x} 1`);
    }

    for (let y = 2; y <= m; y++) {
        answer.push(`${n} ${y}`);
    }

    for (let y = m; y > 1; y--) {
        for (let i = 1; i < n; i++) {
            if (y % 2 !== m % 2) {
                answer.push(`${i} ${y}`)
            } else {
                answer.push(`${n - i} ${y}`)
            }
        }
    }
} else if (n % 2 === 0) {
    for (let x = 1; x <= n; x++) {
        answer.push(`${x} 1`);
    }

    for (let y = 2; y <= m; y++) {
        answer.push(`${n} ${y}`);
    }

    for (let x = n - 1; x > 0; x--) {
        for (let i = 2; i <= m; i++) {
            if (x % 2 === n % 2) {
                answer.push(`${x} ${i}`)
            } else {
                answer.push(`${x} ${m - i + 2}`)
            }
        }
    }

} else {
    for (let x = 1; x <= n; x++) {
        answer.push(`${x} 1`);
    }

    for (let y = 2; y <= m; y++) {
        answer.push(`${n} ${y}`);
    }

    for (let x = n - 1; x >= 3; x--) {
        for (let i = 2; i <= m; i++) {
            if (x % 2 === n % 2) {
                answer.push(`${x} ${i}`)
            } else {
                answer.push(`${x} ${m - i + 2}`)
            }
        }
    }

    for (let y = m; y >= 3; y--) {
        if (y % 2 !== m % 2) {
            answer.push(`1 ${y}`) 
            answer.push(`2 ${y}`) 
        } else {
            answer.push(`2 ${y}`) 
            answer.push(`1 ${y}`) 
        }
    }

    answer.push('1 2');
} 

console.log(answer.length);
console.log(answer.join('\n'))