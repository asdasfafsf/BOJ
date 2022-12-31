const fs = require('fs');
const input = (fs.readFileSync('/dev/stdin').toString().trim());


const wh = input.split('\n')[0].split(' ');


const h = parseInt(wh[0]);
const w = parseInt(wh[1]);


const chessPan = input.split('\n').slice(1).map(e => e.split(''));

let min = Number.MAX_VALUE;


for (let y = 0; y < h - 7; y++) {
    for (let x = 0; x < w - 7; x++){

        for(let i = 0; i < 2; i++) {
            let value = 0;
            let prev = chessPan[y + 7][x + 7];

            if (i == 1) {
                if (prev === 'B') {
                    prev = 'W'
                } else {
                    prev = 'B';
                }
            }

        
            for (let yy = 0; yy < 8; yy++) {
                for (let xx = 0; xx < 8; xx++) {
                    const current = chessPan[yy + y][xx + x];

                
                    if (xx == 0) {
                        if (prev !== current) {
                            value++;
                            if (current === 'B') {
                                prev = 'W'
                            } else {
                                prev = 'B'
                            }
                        }
                    } else if (prev === current) {
                        value++;
                        if (current === 'B') {
                            prev = 'W'
                        } else {
                            prev = 'B'
                        }
                    } else {
                        prev = current;
                    }
                }
            }

            min = Math.min(value, min);
        }
    }
}

console.log(min);