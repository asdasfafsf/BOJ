const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



let T = +input[0];
let index = 0;


const findLH = (order, arr) => {
    let y = -1; 
    let x = -1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === order) {
                return [i, j];
            }
        }
    }
}

while (T--) {
    const [h, l] = input[++index].split(' ').map(Number);
    const arr = [];


    for (let i = 0; i < h; i++) {
        arr.push(input[++index].split(' ').map(Number))
    }

    let floor = 0;

    let answer = 0;
    let order = 1;

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== -1) {
                count++;
            }
        }
    }


    const currents = Array(h).fill(0);

    while (count) {
        const [y, x] = findLH(order, arr);

        // console.log(`현재${floor}층에서 컨베이어는 ${currents[floor]}`)
        // console.log(`${y}층 ${x}번째로 이동해야합니다.`)
  
        answer += Math.abs(y - floor) * 10;
        floor = y;
        

        const left = x > currents[floor] ? currents[floor] + 1 + (l - 1 - x) : currents[floor] - x;
        const right = x >= currents[floor] ? x - currents[floor] : (l - currents[floor]) + x;

        // console.log(`${floor}층으로 이동하구 컨베이어는 ${currents[floor]} 현재 차례 : ${order}`)

        // console.log(`왼쪽으루 움직이면${left}만큼 가야해요`);
        // console.log(`오른쪽으로 움직이면${right}만큼 가야해요`)
        // console.log(`${Math.min(left, right)} 만큼 움직여야 해요`)
        // console.log()

        currents[floor] = x;
        answer += (Math.min(left, right) * 5);
        answer += floor * 10
        floor = 0;
   

        arr[y][x] = -1;


        order++;
        count--;
    }

    console.log(answer)

    // break;

}
