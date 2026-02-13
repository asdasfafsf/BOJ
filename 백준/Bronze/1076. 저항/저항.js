const fs = require('fs');

const input = fs.readFileSync(0,'utf8').trim().split('\n');

const v = {
black:[0,1],
brown:[1,10],
red:[2,100],
orange:[3,1000],
yellow:[4,10000],
green:[5,100000],
blue:[6,1000000],
violet:[7,10000000],
grey:[8,100000000],
white:[9,1000000000]
};

let a = v[input[0]][0];
let b = v[input[1]][0];
let m = v[input[2]][1];

console.log((a*10+b)*m);