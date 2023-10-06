const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const K = +input.at(0);



for (let i = 0; i < K; i++) {
    const arr = input.at(i + 1).split(' ').map(Number);

    const [N, M, x, y] = arr;

    let sX = x;
    let sY = y;

    const max = lcm(N, M);
    while (sX !== sY && sX <= max) {
        if (sX < sY) {
            sX += N;
        } else {
            sY += M
        }
    }

    console.log(sX !== sY ? -1 : sX);
    
}


function gcd(a, b) {

	while(b > 0) {
	    let c = a;
	    a = b;
	    b = c % b;
	}
	
	return a;
}

function lcm(a,b)
{
    return a * b / gcd(a,b);
}