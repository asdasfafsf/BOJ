const N = Number(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim());



for (let i = 0; i < N; i++) {
    let str = '';
    for (let j = 0; j < N - i - 1; j++) {
        str += ' ';
    }

    for (let j = 0; j <= i; j++) {
        str += '*';
    }

    console.log(str)
}

for (let i = 0; i < N - 1; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += ' ';
    }

    for (let j = 0; j < N - i - 1; j++) {
        str += '*';
    }

    console.log(str)
}