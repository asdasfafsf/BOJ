const [N, W, T, K, ...F] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(/\s/)
    .filter(elem => elem.trim())
    .map(Number)


let answer = 0;

while (F.length > N) {
    F.pop();
}

const fire = (current, F) => {
    const newF = [...F]
    for (let i = 0; i < newF.length; i++) {
        if (i === current) continue;

        if (F[i - 1] > 0 && F[i + 1] > 0) {
            newF[i]--;
        } else if (F[i - 1] > 0 || F[i + 1] > 0) {
            newF[i] -= 2;
        } else {
            newF[i] -= 3;
        }
    }
    return newF;
}


const recursion = (time, current, F) => {
    const calcF = fire(time === 1 ? -1 : current, F);
    const alive = calcF.reduce((pv, cv) => (cv > 0 ? pv + 1 : pv), 0);

    if (alive < K) {
        return;
    }

    if (time === T) {
        answer++;
        return;
    }

    for (const add of [-1, 0, 1]) {
        const next = current + add;
        if (next < N && next > -1) {
            recursion(time + 1, next, calcF);
        }
    }
    
}


recursion(1, W, F);

console.log(answer)