const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')


let T = +input[0];
let index = 0;

for (let caseNum = 1; caseNum <= T; caseNum++) {
    const turnaroundTime = +input[++index];
    const [NA, NB] = input[++index].split(' ').map(Number);

    const AtoB = [];
    const BtoA = [];

    for (let i = 0; i < NA; i++) {
        const [departure, arrival] = input[++index].split(' ');
        const [depHour, depMin] = departure.split(':').map(Number);
        const [arrHour, arrMin] = arrival.split(':').map(Number);
        const depTime = depHour * 60 + depMin;
        const arrTime = arrHour * 60 + arrMin;
        AtoB.push({ dep: depTime, arr: arrTime });
    }

    for (let i = 0; i < NB; i++) {
        const [departure, arrival] = input[++index].split(' ');
        const [depHour, depMin] = departure.split(':').map(Number);
        const [arrHour, arrMin] = arrival.split(':').map(Number);
        const depTime = depHour * 60 + depMin;
        const arrTime = arrHour * 60 + arrMin;
        BtoA.push({ dep: depTime, arr: arrTime });
    }

    AtoB.sort((a, b) => a.dep - b.dep);
    BtoA.sort((a, b) => a.dep - b.dep);

    const events = [];

    for (let train of AtoB) {
        events.push({ time: train.dep, type: 'departure', station: 'A' });
    }

    for (let train of BtoA) {
        events.push({ time: train.dep, type: 'departure', station: 'B' });
    }

    for (let train of AtoB) {
        events.push({ time: train.arr + turnaroundTime, type: 'arrival', station: 'B' });
    }

    for (let train of BtoA) {
        events.push({ time: train.arr + turnaroundTime, type: 'arrival', station: 'A' });
    }

    events.sort((a, b) => {
        if (a.time !== b.time) {
            return a.time - b.time;
        } else {
            if (a.type === b.type) {
                return 0;
            } else if (a.type === 'arrival') {
                return -1;
            } else {
                return 1;
            }
        }
    });

    let requiredA = 0;
    let requiredB = 0;

    let availableA = [];
    let availableB = [];

    for (let event of events) {
        if (event.type === 'arrival') {
            if (event.station === 'A') {
                availableA.push(event.time);
            } else {
                availableB.push(event.time);
            }
        } else {
            if (event.station === 'A') {
                availableA.sort((a, b) => a - b);
                if (availableA.length > 0 && availableA[0] <= event.time) {
                    availableA.shift();
                } else {
                    requiredA++;
                }
            } else {
                availableB.sort((a, b) => a - b);
                if (availableB.length > 0 && availableB[0] <= event.time) {
                    availableB.shift();
                } else {
                    requiredB++;
                }
            }
        }
    }

    console.log(`Case #${caseNum}: ${requiredA} ${requiredB}`);
}