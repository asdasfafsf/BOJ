const G = +require('fs')
    .readFileSync(0, 'utf-8')
    .trim();

const answer = [];
let left = 1;
let right = 2;


while (left < right) {
    const l = Math.pow(left, 2);
    const r = Math.pow(right, 2);

    const diff = r - l;


    if (diff == G) {
        answer.push(right);
        left++;
        right++;
    } else if (diff > G) {
        left++;
    } else {
        right++;
    }
}

if (answer.length === 0) {
    console.log(-1);
} else {
    console.log(answer.join('\n'));
}