const cards = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(',');

const answer = [];

for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
        answer.push(cards[i] + cards[j]);
    }
}

const getRank = pair => {
    const card1 = pair.substring(0, 2);
    const card2 = pair.substring(2, 4);
    const n1 = parseInt(card1.slice(0, card1.length - 1), 16);
    const n2 = parseInt(card2.slice(0, card2.length - 1), 16);
    const c1 = card1.slice(-1);
    const c2 = card2.slice(-1);
    let category;

    if ((Math.abs(n1 - n2) === 1) 
    || ((n1 === 1 && n2 === 15) 
    || (n1 === 15 && n2 === 1))) {
        category = 3;
    } else if (n1 === n2) {
        category = 2;
    } else {
        category = 1;
    }
    const sameColor = (c1 === c2) ? 1 : 0;
    let larger;
    let smaller;
    let largerColor;

    if (n1 > n2) {
        larger = n1; 
        smaller = n2; 
        largerColor = c1;
    } else if (n1 < n2) {
        larger = n2; 
        smaller = n1; 
        largerColor = c2;
    } else {
        larger = n1; 
        smaller = n2; 
        largerColor = c1;
    }
    return { category, sameColor, larger, smaller, largerColor };
}
answer.sort((a, b) => {
    const r1 = getRank(a);
    const r2 = getRank(b);

    if (r1.category !== r2.category) {
        return r2.category - r1.category;
    } else if (r1.sameColor !== r2.sameColor) {
        return r2.sameColor - r1.sameColor;
    } else if (r1.larger !== r2.larger) { 
        return r2.larger - r1.larger;
    } else if (r1.smaller !== r2.smaller) {
        return r2.smaller - r1.smaller;
    } else if (r1.largerColor !== r2.largerColor) {
        if (r1.largerColor === 'b') { 
            return -1;
        } else { 
            return 1;
        }
    }
    return 0;
});

console.log(answer.join('\n'));