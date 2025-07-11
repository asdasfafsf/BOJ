const [N, A, B] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(' ')
    .map(Number);

if (A < B) {
    console.log('Bus');
} else if (A > B) {
    if (N <= B) {
        console.log('Subway');
    } else {
        console.log('Bus');
    }
} else {
    console.log('Anything');
}