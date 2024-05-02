const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim();
    
let answer = 0;


for (let tt = 0; tt < input.length; tt++) {
    const str = input.slice(tt);
    const pi = Array(str.length).fill(0);
    let j = 0;

    for (let i = 1; i < pi.length; i++) {

        while (j > 0 && str[i] !== str[j]) {
            j = pi[j - 1];
        }

        if (str[i] === str[j]) {
            j++;
            pi[i] = j;
        }
    }

    answer = Math.max(answer, ...pi);
}

console.log(answer)