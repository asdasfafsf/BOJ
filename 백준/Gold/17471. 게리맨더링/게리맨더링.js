
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const populations = input[1].split(' ').map(Number);
const graph = [];

for (let i = 2; i < input.length; i++) {
    graph.push(input[i].split(' ').slice(1).map(elem => elem - 1));
}

const isConnect = (team, teams, value) => {
    const visited = Array(N).fill(false);

    const queue = [team[0]];
    visited[team[0]] = true;
    let current = 0;

    while (queue.length !== current) {
        const node = queue[current];

        for (const nextNode of graph[node]) {
            if (teams[nextNode] === value && visited[nextNode] === false) {
                queue.push(nextNode);
                visited[nextNode] = true;
            }
        }

        current++;
    }

    return team.reduce((pv, cv) => pv && visited[cv], true);
}

const calculate = (team) => {
    return team.reduce((pv, cv) => pv + populations[cv], 0)
}

let answer = 99999;
const recursion = (depth, start, teams) => {

    if (depth > 0) {
        const team1 = [];
        const team2 = [];

        for (let i = 0; i < teams.length; i++) {
            if (teams[i]) {
                team1.push(i);
            } else {
                team2.push(i);
            }
        }

        if (isConnect(team1, teams, true) && isConnect(team2, teams, false)) {
            const team1Score = calculate(team1);
            const team2Score = calculate(team2);

            answer = Math.min(answer, Math.abs(team1Score - team2Score));
        }
    }

    if (depth >= N >> 1) {
        return;
    }


    for (let i = start; i < N; i++) {
        teams[i] = true;
        recursion(depth + 1, i + 1, teams);
        teams[i] = false;
    }
}
recursion(0, 0, Array(N).fill(false));



console.log(answer === 99999 ? -1 : answer);