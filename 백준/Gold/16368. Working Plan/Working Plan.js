
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const [m, n, w, h] = input[0].split(' ').map(Number);
const labelForces = input[1].split(' ').map(Number);
const works = input[2].split(' ').map(Number)

const workers = [];


for (let currentDay = 0; currentDay < labelForces.length; currentDay++) {
    workers.push([currentDay, labelForces[currentDay], -999999999])
}

const answers = Array.from(Array(m), () => [])



for (let currentDay = 0; currentDay < works.length; currentDay++) {
    workers.sort((a, b) => {
        const [ai, af, aa] = a;
        const [bi, bf, ba] = b;


        return bf - af;
    });

    // console.log('currentDay : ' + currentDay)
    for (let work = 0; work < workers.length; work++) {
        if (works[currentDay] <= 0) {
            break;
        }

        const [index, force, avaliableDay] = workers[work];

        if (avaliableDay < currentDay && workers[work][1] > 0) {
            workers[work][2] = currentDay + Math.min(w, workers[work][1]) + h - 1;
    
            for (let s = currentDay; s < currentDay + w && workers[work][1] > 0; s++) {
                works[s]--;
                workers[work][1]--;
            }
            answers[index].push(currentDay + 1);
        }

    }

    // console.log(workers)
    // console.log(works)

    if (works[currentDay] > 0) {
        console.log(-1);
        process.exit(0);
    }
}


console.log(1);
console.log(answers.map(elem => elem.join(' ')).join('\n'))