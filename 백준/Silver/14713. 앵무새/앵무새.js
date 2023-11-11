const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const N = +input[0];
const queues = []

for (let i = 1; i < input.length - 1; i++) {
    queues.push(input[i].split(' '));
}
const currents = Array.from({length: queues.length}, () => 0);

const arr = input
    .at(-1)
    .split(' ');

let answer = 'Possible';

for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    let found = false;

    for (let j = 0; j < queues.length; j++) {
        const queue = queues[j];
        const current = currents[j];
        const data = queue[current];

        if (word === data) {
            currents[j]++;
            found = true;
            break;
        }
    }
    
    if (!found) {
        answer = 'Impossible';
        break;
    }
}

if (answer === 'Possible') {
    answer = queues
        .every((queue, index) => queue.length === currents[index])
        ? 'Possible'
        : 'Impossible'
}


console.log(answer);
