const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


let answer = 0;

for (let i = 1; i < input.length; i++) {
    const str = input[i];
    const arr = Array.from({length: 26}, () => false);

    let lastCode = -1;
    let isAnalogue = true;

    for (let j = 0; j < str.length; j++) {
        const code = str.charCodeAt(j) - 'a'.charCodeAt(0);

        if (arr[code] === true && lastCode !== code) {
            isAnalogue = false;
            break;
        }

        arr[code] = true;
        lastCode = code;
    }

    if (isAnalogue === true) {
        answer++;
    }
}

console.log(answer);
