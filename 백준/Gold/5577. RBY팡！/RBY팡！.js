
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim())
    .slice(1)
    .map(Number);

let answer = input.length;



const pang = (str, index) => {
    let target = str[index];
    let left = index;
    let right = index;

    // console.log('최초 타겟' + target)

    let current = 0;
    while (true) {
        // console.log(`시작전 left : ${left} right : ${right} current : ${current}  target : ${target}`)
        // console.log(`시작전 leftValue : ${str[left]} rightValue :  ${str[right]}`);
        // console.log(str.slice(0, left).join(''), str.slice(right + 1).join(''))
        while (target === str[--left] && left > -1);
        while (target === str[++right] && right < str.length);
        left++;
        right--;

        if (left < 0 || right > str.length - 1 || left === right) {
            break;
        }

        // console.log(`시작후 left : ${left} right : ${right} current : ${current}`)
        // console.log(`시작후 leftValue : ${str[left]} rightValue :  ${str[right]}`);
        // console.log(str.slice(0, left).join(''), str.slice(right + 1).join(''))
        if (right - left >= current + 3) {
            current = (right - left + 1)
            target = str[--left];
            // right++
        } else {
            break;
        }


        // console.log('')
    }

    return str.length - current;
};

for (let i = 0; i < input.length; i++) {
    // console.log(input[i])
    input[i] = ((input[i] % 3) + 1) ;
    // console.log(input[i])
    answer = Math.min(pang(input, i), answer);

    input[i] = ((input[i] % 3) + 1);
    // console.log(input[i])
    answer = Math.min(pang(input, i), answer);

    input[i] = ((input[i] % 3) + 1);
    // console.log(input[i])
    // break;
  

}

console.log(answer);