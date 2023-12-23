const map = {
    'A': 1,
    'B': 1,
    'C': 1,
    'D': 2,
    'E': 2,
    'F': 2,
    'G': 3,
    'H': 3,
    'I': 3,
    'J': 4,
    'K': 4,
    'L': 4,
    'M': 5,
    'N': 5,
    'O': 5,
    'P': 6,
    'Q': 6,
    'R': 6,
    'S': 6,
    'T': 7,
    'U': 7,
    'V': 7,
    'W': 8,
    'X': 8,
    'Y': 8,
    'Z': 8
}

console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('')
    .reduce((pv, cv) => pv + (map[cv] ?? 9) + 2, 0))

