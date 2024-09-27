const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const alphabets = Array.from(Array(26), () => 0);

for (let i = 0; i < input.length; i++) {
    alphabets[input.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}

const target = [...new Set(input)].join('');
let answer = 0;

const recursion = (depth, last) => {
    if (depth === input.length) {
        answer++;
        return;
    }

    for (let i = 0; i < target.length; i++) {
        const cur = target.charCodeAt(i) - 'a'.charCodeAt(0);

        if (alphabets[cur] > 0 && last !== cur) {
            alphabets[cur]--;
            recursion(depth + 1,cur)
            alphabets[cur]++;
        }
    }
}

recursion(0, '');
console.log(answer);