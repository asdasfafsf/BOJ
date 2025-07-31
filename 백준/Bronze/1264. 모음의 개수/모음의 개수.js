const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .split('\n');

for (let line of input) {
    if (line.trim() === '#') { 
        break;
    }

    let count = 0;

    for (let c of line) {
        if ('aeiouAEIOU'.includes(c)) { 
            count++;
        }
    }
    
    console.log(count);
}