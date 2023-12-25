const N = +(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim());


const answer = [];

for (let i = 1; i <= N; i++) {
    let str = '';
    for (let j = 0; j < N - i; j++) {
        str += ' ';
    }

    for (let j = 0; j < i + (i - 1); j++) {
        str += '*';
    }

    answer.push(str);
}


for(let i = N - 1; i > 0; i--) {
    let str = '';
    for(let j = 0; j < N - i; j++) {
        str += ' '
    }
    for(let j = 0; j < i + (i - 1); j++) {
        str += '*'
    }
	
    answer.push(str)
}

console.log(answer.join('\n'))
