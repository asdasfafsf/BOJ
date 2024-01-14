
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const visited = Array.from({length: N}, () => false);


const calAbility = (members) => {
    let ability = 0;

    for (let i = 0; i < members.length; i++) {
        const y = members[i];
        for (let j = i + 1; j < members.length; j++) {
            const x = members[j];
            ability += arr[y][x] + arr[x][y];
        }
    }

    return ability;
}

let answer = 1000000;

const recursion = (current, start) => {
    const startMembers = [];
    const linkMembers = [];

    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === true) {
            startMembers.push(i);
        } else {
            linkMembers.push(i);
        }
    }
    answer = Math.min(Math.abs(calAbility(startMembers) - calAbility(linkMembers)), answer)

    if (current === N >> 1) {
        return;
    }

    for (let i = start; i < N; i++) {
        visited[i] = true;
        recursion(current + 1, i + 1);
        visited[i] = false;
    }
}


recursion(0, 0);
console.log(answer)