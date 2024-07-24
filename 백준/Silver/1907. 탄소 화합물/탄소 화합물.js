const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')[0];


const a = input.split('=')[0].split('+')[0].trim();
const b = input.split('=')[0].split('+')[1].trim();
const c = input.split('=')[1].trim();


function getCountMap(str) {
    const map = {'C': 0, 'H': 0, 'O': 0};

    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i);

        if ('CHO'.includes(ch)) {
            map[ch]++;
        } else {
            const prev = str.charAt(i - 1);
            let currentNum = '';

            while (!'CHO'.includes(str.charAt(i))) {
                currentNum += str.charAt(i);
                i++
            }
            map[prev] += (Number(currentNum) - 1);
            i--;
        }
    }

    return map;
}


const map1 = getCountMap(a);
const map2 = getCountMap(b);
const map3 = getCountMap(c);


const current = [map3.C, map3.H, map3.O];
for (let m1 = 1; m1 <= 10; m1++) {

    for (let m2 = 1; m2 <= 10; m2++) {

        for (let m3 = 1; m3 <= 10; m3++) {
            ['C', 'H', 'O'].forEach((elem, index) => {
                current[index] = map3[elem] * m3;
                current[index] -= map2[elem] * m2;
                current[index] -= map1[elem] * m1;
            })

            if (current.join('') === '000') {
                console.log(`${m1} ${m2} ${m3}`);
                process.exit(0);
            }
        }
    }
}

