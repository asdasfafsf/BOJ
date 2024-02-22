const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, d, k, c] = input.shift().split(' ').map(Number);

const sushiList = input.map(Number);
const visited = Array.from(Array(d + 1), () => 0);


let left = 0;
let answer = 0;
let current = 1;
let count = 1;

const path = [sushiList[0]];
visited[sushiList[0]] = 1;
for (let i = 1; i < N + k;) {
    const value = sushiList[i % N];

    // console.log(`${value} 스시입니다.`)

    if (i - left < k) {
        if (visited[value] === 0) {
            count++;    
        }
        visited[value]++;
        i++;
        // path.push(value)
    } else {
        visited[sushiList[left % N]]--;
        if (visited[sushiList[left % N]] === 0) {
            count--;
        }
        left++;
        // path.shift()
    }

    // if (left >= i) {
    //     // console.log('왜 바로나옴?')
    //     break;
    // }

    // console.log(count)
    // console.log(path)
    answer = Math.max(count + (visited[c] === 0 ? 1 : 0), answer);
    // console.log(`${answer} 개 먹어용~`);
    // console.log()

    if (answer === k + 1) {
        break;
    }
}

console.log(answer)