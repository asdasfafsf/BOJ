const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const ranks = input[1].split(' ').map(Number);
const keywordPosts = Array.from({ length: M + 1 }, () => []);

for (let i = 2; i < 2 + N; i++) {
    const [_, ...keywords] = input[i].split(' ').map(Number);
    for (const keyword of keywords) {
        keywordPosts[keyword].push(i - 1);
    }
}

const Q = +input[2 + N];
const queries = input.slice(3 + N);

const answer = queries.map((k) => {
    const posts = keywordPosts[+k] || [];
    if (posts.length === 0) return -1;
    return posts.sort((a, b) => ranks[a - 1] - ranks[b - 1]).join(' ');
});

console.log(answer.join('\n'));