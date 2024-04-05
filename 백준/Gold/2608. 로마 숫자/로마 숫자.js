const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());

const toArabia = (roma) => {
    const convertMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };

    let result = 0;

    for (let i = 0; i < roma.length; i++) {
        let current = roma.charAt(i)
        let next = roma.charAt(i + 1);

        if (convertMap[current + next]) {
            result += convertMap[current + next];
            i++;
        } else {
            result += convertMap[current];
        }
    }

    return result;
}

const toRoma = (arabia) => {
    const convertMap = {"1":"I","4":"IV","5":"V","9":"IX","10":"X","40":"XL","50":"L","90":"XC","100":"C","400":"CD","500":"D","900":"CM","1000":"M"}
    const array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = '';
    for (const element of array) {
        const str = convertMap[element.toString()];
        result = result.padEnd(Math.floor(arabia / element) * str.length + result.length, str);
        arabia %= element;
    }

    return result;
}

const arabia = toArabia(A) + toArabia(B);
const roma = toRoma(arabia);


console.log(arabia);
console.log(roma)