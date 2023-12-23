const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()


let answer = 0;
const map = {
    'c=': true,
    'c-': true,
    'dz=': true,
    'd-': true,
    'lj': true,
    'nj': true,
    's=': true,
    'z=': true
}


for (let i = 0; i < input.length; i++) {
    let str = input.charAt(i) + input.charAt(i + 1) + input.charAt(i + 2);

    if (map[str] === true) {
        i+=2
        answer++;
    } else {
        str = str.slice(0, 2);

        if (map[str] === true) {
            i++;
            map[str] = true;
            answer++;
        } else {
            str = str.slice(0, 1);
            answer++;
        }
    }
} 

console.log(answer)