const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(elem => elem.split(' ').map(Number));


const arr = input.slice(1)
const len = input[0][0];
const members = new Array(len)
                    .fill(0)
                    .map((elem, index) => index + 1);

let min = Number.MAX_VALUE;

const recursion = (current, start, team1) => {
    if (current === len / 2) {
        const team2 = members.filter(elem => !team1.includes(elem));

        const team1Score = calculate(team1);
        const team2Score = calculate(team2);

        const score = Math.abs(team1Score - team2Score);

        min = Math.min(score, min);
        return;
    }


    for (let i = start; i < len; i++)  {
        team1[current] = i + 1;
        recursion(current + 1, i + 1, team1);
        team1[current] = 0;
    }
}

const calculate = (array) => {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const y = array[i];
            const x = array[j];
            sum += arr[y - 1][x - 1] + arr[x - 1][y - 1];
        }
    }

    return sum;
}


 recursion(1, 1, [1]);



console.log(min);


