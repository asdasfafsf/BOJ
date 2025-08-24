const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const burgers = input.slice(0, 3);
const drinks = input.slice(3);

const minBurger = Math.min(...burgers);
const minDrink = Math.min(...drinks);

console.log(minBurger + minDrink - 50);