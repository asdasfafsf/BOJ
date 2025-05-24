const N = +require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();


if (N % 7 === 2 || N % 7 === 0) {
    console.log('CY');
} else {
    console.log('SK');
}
