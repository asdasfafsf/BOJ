const str = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

let repeat = 0;
for (let i = 0; i < str.length;) {
    if (str[i] === 'w') {
        i++;
        repeat++;
    } else if (
        repeat > 0 &&
        str.slice(i, i + repeat * 3) ===
        'o'.repeat(repeat) + 'l'.repeat(repeat) + 'f'.repeat(repeat)
    ) {
        i += repeat * 3;
        repeat = 0;
    } else {
        console.log(0);
        process.exit(0);
    }
}

if (!str.length || repeat) {
    console.log(0);
} else {
    console.log(1);
}