console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('')
    .map(elem => {
        if (elem.charCodeAt(0) < 'a'.charCodeAt(0)) {
            return elem.toLowerCase();
        }

        return elem.toUpperCase();
    })
    .join(''))


