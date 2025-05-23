console.log(require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .sort((a, b) => {
        const bojRegex = /boj\.kr\/\d+/
        const isBojA = bojRegex.test(a)
        const isBojB = bojRegex.test(b)
        if (isBojA && isBojB) {
            const aNo = +a.split('boj.kr/')[1]
            const bNo = +b.split('boj.kr/')[1]
            return aNo - bNo
        } else if (isBojA) {
            return 1
        } else if (isBojB) {
            return -1
        } else if (a.length === b.length) {
            return a < b ? -1 : a > b ? 1 : 0
        }
        return a.length - b.length
    }).join('\n'))