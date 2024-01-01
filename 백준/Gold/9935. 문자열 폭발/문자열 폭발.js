
let [answer, [...M]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n');


while (true) {
    const stack = [];
    let isUpdated = false;

    for (let i = 0; i < answer.length; i++) {
        const str = answer.charAt(i);
        if (str === '') {
            continue;
        }
        stack.push(str);

        let isPiece = true;
        for (let j = M.length - 1; j >= 0; j--) {
            const piece = stack.at((j - M.length));
            if (piece !== M.at(j)) {
                isPiece = false;
                break;
            }
        }

        if (isPiece) {
            isUpdated = true;
            for (let i = 0; i < M.length; i++) {
                stack.pop();
            }
        }
    }
    answer = stack.join('');
    if (!isUpdated) {
        break;
    }
}

console.log(answer || 'FRULA');