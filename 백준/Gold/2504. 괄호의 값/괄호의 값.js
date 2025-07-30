const str = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

const stack = [];
let cur = 0;

for (let i = 0; i < str.length; i++) {
    const s = str[i];

    if (s === '(' || s === '[') {
        stack.push(s);
    } else if (s === ')') {
        if (!stack.length) {
            cur = 0;
            break;
        }

        if (stack.at(-1) === '(') {
            stack.pop();
            stack.push(2);
        } else {
            let sum = 0;
            while (stack.length && typeof stack.at(-1) === 'number') {
                sum += stack.pop();
            }

            if (stack.at(-1) === '(') {
                stack.pop();
                stack.push(sum * 2);
            } else {
                cur = 0;
                break;
            }
        }
    } else if (s === ']') {
        if (!stack.length) {
            cur = 0;
            break;
        }

        if (stack.at(-1) === '[') {
            stack.pop();
            stack.push(3);
        } else {
            let sum = 0;
            while (stack.length && typeof stack.at(-1) === 'number') {
                sum += stack.pop();
            }

            if (stack.at(-1) === '[') {
                stack.pop();
                stack.push(sum * 3);
            } else {
                cur = 0;
                break;
            }
        }
    }
}

if (stack.some(x => typeof x !== 'number')) {
    console.log(0);
} else {
    const result = stack.reduce((a, b) => a + b, 0);
    console.log(result);
}