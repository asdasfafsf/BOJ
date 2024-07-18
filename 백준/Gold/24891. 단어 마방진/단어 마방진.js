const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());


const [L, N] = input[0].split(' ').map(Number);
const words = input.slice(1);
words.sort((a, b) => a.localeCompare(b));

const visited = Array(words.length).fill(false);

const recursion = (depth, path) => {
    if (depth === L) {
        const target = [];
        for (const index of path) {
            target.push(words[index]);
        }

        let isOk = true;
        for (let i = 0; i < target.length; i++) {

            for (let j = 0; j < target.length; j++) {
                if (target[i][j] !== target[j][i]) {
                    isOk = false;
                    break;
                }
            }
        }

        if (isOk) {
            console.log(target.join('\n'));
            process.exit(0)
        }
        return;
    }

    for (let i = 0; i < words.length; i++) {
        if (visited[i]) {
            continue;
        }

        path.push(i);
        visited[i] = true;
        recursion(depth + 1, path);
        path.pop();
        visited[i] = false;
    }
}

recursion(0, [])
console.log('NONE');