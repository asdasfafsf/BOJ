


const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const map = {};

for (let i = 1; i < input.length; i++) {
    const [count, ...names] = input[i].split(' ');
    let head = map;

    for (const name of names) {
        if (!head[name]) {
            head[name] = {};
        }

        head = head[name]
    }

}

const answer = [];

const recursion = (head, depth) => {
    const keys = Object
        .keys(head)
        .sort((a, b) => a.localeCompare(b));

    
    for (const key of keys) {
        answer.push(key.padStart((depth * 2) + key.length, '-'))
        recursion(head[key], depth + 1);
    }
}

recursion(map, 0)

console.log(answer.join('\n'))