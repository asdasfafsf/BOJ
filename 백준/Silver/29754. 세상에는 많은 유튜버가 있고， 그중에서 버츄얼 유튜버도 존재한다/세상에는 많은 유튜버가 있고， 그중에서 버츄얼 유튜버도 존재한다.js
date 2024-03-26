
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const youtubers = {};
const answer = [];


const calc = (startTime, endTime) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    return (endHour - startHour) * 60 + (endMinute - startMinute);
}

for (let i = 1; i < input.length; i++) {
    const [name, day, startTime, endTime] = input[i].split(' ').map(elem => elem.trim());

    if (!youtubers[name]) {
        youtubers[name] = [];
    }

    const week = Math.ceil(day / 7) - 1;

    if (!youtubers[name][week]) {
        youtubers[name][week] =  {
            count:0,
            minutes: 0,
        };
    }

    youtubers[name][week].count++;
    youtubers[name][week].minutes += calc(startTime, endTime);
}

const [N, day] = input[0].split(' ').map(Number);
const week = (day / 7);
const names = Object.keys(youtubers);

for (const name of names) {
    let isVirtual = true;
    const youtuber = youtubers[name];

    for (let i = 0; i < week; i++) {
        if (!youtuber[i]) {
            isVirtual = false;
            break;
        }

        if (youtuber[i].count < 5 || youtuber[i].minutes < 3600) {
            isVirtual = false;
            break;
        }
    }

    if (isVirtual) {
        answer.push(name);
    }
}

console.log(answer.length === 0 ? -1 : answer.sort().join('\n').trim())