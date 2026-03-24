const input = require('fs')
    .readFileSync(0)
    .toString()
    .trim();

let x = +input;

if (x >= 6) {
    console.log('Success!');
} else {
    console.log('Oh My God!');
}