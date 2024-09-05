const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .slice(1);


const calc = str => {
    let current = 0;

    let isOpen = false;
    const result = [];
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === '(') {
            isOpen = true;
            current++;
        } else {
            if (isOpen) {
                if (!result[current]) {
                    result[current] = 0;
                }
                result[current]++;
                isOpen = false;
            }

            if (current === 1) {
                current = 0;
            } else {
                current--;
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (!result[i]) {
            result[i] = 0;
        }
        if (result[i] > 1) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += Math.floor(result[i] / 2);
            result[i] %= 2;
        }
    }

    return result;
}

const compare = (a, b) => {
    if (a.length === b.length) {
        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i] > b[i]) {
                return '>';
            } else if (a[i] < b[i]) {
                return '<'
            } 
        }

        return '='
    } else if (a.length > b.length) {
        return '>';
    } else {
        return '<';
    }
}

for (let i = 0; i < input.length; i+=2) {
    const [A, B] = [calc(input[i]), calc(input[i + 1])];
    const res = compare(A, B);
    console.log(res)

}