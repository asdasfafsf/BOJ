const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const k = +input[0];
const n = +input[1];
const members = Array.from({length: k}, () => 'A'.charCodeAt(0))
    .map((elem, index) => String.fromCharCode(elem + index));


const dests = input[2].split('');
const arr = input.slice(3).map(elem => elem.split(''));


for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '?') {
        break;
    }
    for (let j = 0; j < arr[i].length; j++) {

        if (arr[i][j] === '-') {
            [members[j], members[j + 1]] = [members[j + 1], members[j]]
        }
    }
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i][0] === '?') {
        break;
    }

    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === '-') {
            [dests[j], dests[j + 1]] = [dests[j + 1], dests[j]]
        }
    }
}

let answer = '';
// console.log(members.join(' '));
// console.log(dests.join(' '))

for (let i = 1; i < members.length; i++) {
    // console.log(members[i])
    if (members[i - 1] === dests[i] && dests[i - 1] === members[i]) {
        [members[i - 1], members[i]] = [members[i], members[i - 1]]
        answer += '-';
    } else if (members[i - 1] === dests[i - 1]) {
        answer += '*';
    } else  {
        answer = Array.from({length: k - 1}, () => 'x').join('');
        break;
    }
}

console.log(answer)