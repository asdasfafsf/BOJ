const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', (line) => {
    input += line;
    rl.close()
});

rl.on('close', () => {
    const a = input.split('=')[0].split('+')[0].trim();
    const b = input.split('=')[0].split('+')[1].trim();
    const c = input.split('=')[1].trim();

    function getCount(str, num) {
        const map = { 'C': 0, 'H': 0, 'O': 0 };

        for (let i = 0; i < str.length; i++) {
            const ch = str.charAt(i);

            if ('CHO'.includes(ch)) {
                map[ch]++;
            } else {
                let len = 0;
                let current = '';

                while (i + len < str.length && !'CHO'.includes(str.charAt(i + len))) {
                    current += str.charAt(i + len);
                    len++;
                }

                map[str.charAt(i - 1)] += (Number(current) - 1);
                i += len - 1;
            }
        }

        ['C', 'H', 'O'].forEach(elem => map[elem] = map[elem] * num);

        return map;
    }

    const answer = [];

    for (let m1 = 1; m1 <= 10; m1++) {
        const map1 = getCount(a, m1);

        for (let m2 = 1; m2 <= 10; m2++) {
            const map2 = getCount(b, m2);

            for (let m3 = 1; m3 <= 10; m3++) {
                const map3 = getCount(c, m3);

                Object.keys(map3).forEach(elem => {
                    map3[elem] -= map2[elem];
                    map3[elem] -= map1[elem];
                });

                if (map3.C === 0 && map3.H === 0 && map3.O === 0) {
                    answer.push(`${m1} ${m2} ${m3}`);
                }
            }
        }
    }

    answer.sort((a, b) => a.localeCompare(b));
    console.log((answer[0] ?? 'NEMOGUCE').trim());
});