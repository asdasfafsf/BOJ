let fs = require('fs');
const input = (fs.readFileSync('./dev/stdin').toString()).trim().split(' ').map(e => +e)

const [N, Y, X] = input;

let count = 0;

const Z = (n, y, x) => {
    if (x === X && y === Y) {
        console.log(count);
        return;
    }

    if (Y >= y && Y < y + n && X >= x && X < x + n) {
        n = n / 2;
        Z(n, y, x);
        Z(n, y, x + n);
        Z(n, y + n, x);
        Z(n, y + n, x + n);
    } else {
        count += n * n
    }
    
}

Z(Math.pow(2, N), 0, 0);