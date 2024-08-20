const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map(elem => elem.trim())
    .sort((a, b) => {
        if (a.length === b.length) {
            const aSum = a.replace(/[^0-9]/g, '').split('').map(Number).reduce((pv, cv) => pv + cv, 0);
            const bSum = b.replace(/[^0-9]/g, '').split('').map(Number).reduce((pv, cv) => pv + cv, 0);

            if (aSum === bSum) {
                return a.localeCompare(b);
            }

            return aSum - bSum;
        } 

        return a.length - b.length
    })
    .forEach(elem => console.log(elem));