
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')



const [p, m] = input[0].split(' ').map(Number);

const rooms = [];
for (let i = 1; i < input.length; i++) {
    let isEnter = false;
    const [level, id] = input[i].split(' ').map(elem => elem.trim());

    for (const room of rooms) {
        if (room.players.length === m) {
            continue;
        }

        if (Math.abs(room.level - level) < 11) {
            room.players.push([level, id]);
            isEnter = true;
            break;
        }
    }


    if (!isEnter) {
        rooms.push({
            level: +level,
            players: [[level, id]]
        })
    }
}


const answer = []

for (const room of rooms) {
    if (room.players.length === m) {
        answer.push('Started!');
    } else {
        answer.push('Waiting!');
    }

    answer.push.apply(answer, room.players.sort((a, b) => a[1].localeCompare(b[1])).map(elem => elem.join(' ')));
}

console.log(answer.join('\n'))