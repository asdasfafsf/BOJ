const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;
const results = [];

while (idx < input.length) {
    const n = parseInt(input[idx++]);
    if (n === 0) break;
    
    const students = [];
    let maxHeight = 0;
    
    for (let i = 0; i < n; i++) {
        const [name, height] = input[idx++].split(' ');
        const h = parseFloat(height);
        students.push({ name, height: h });
        maxHeight = Math.max(maxHeight, h);
    }
    
    const tallest = students
        .filter(s => s.height === maxHeight)
        .map(s => s.name)
        .join(' ');
    
    results.push(tallest);
}

console.log(results.join('\n'));