const [[x1, y1, x2, y2], [x3, y3, x4, y4]]= require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const v13 = [x3 - x1, y3 - y1];
const v14 = [x4 - x1, y4 - y1];
const v23 = [x3 - x2, y3 - y2];
const v24 = [x4 - x2, y4 - y2];
const v31 = [x1 - x3, y1 - y3];
const v32 = [x2 - x3, y2 - y3]; 
const v42 = [x2 - x4, y2 - y4];
const v41 = [x1 - x4, y1 - y4]; 

let v1 = ((v13[0] * v14[1]) - (v13[1] * v14[0]));
let v2 = ((v23[0] * v24[1]) - (v23[1] * v24[0]));
let v3 = ((v31[0] * v32[1]) - (v31[1] * v32[0]));
let v4 = ((v41[0] * v42[1]) - (v41[1] * v42[0]));

v1 = (v1 > 0 ? 1 : (v1 < 0 ? -1 : 0));
v2 = (v2 > 0 ? 1 : (v2 < 0 ? -1 : 0));
v3 = (v3 > 0 ? 1 : (v3 < 0 ? -1 : 0));
v4 = (v4 > 0 ? 1 : (v4 < 0 ? -1 : 0));

// console.log(v1, v2, v3, v4)
if ((v1 * v2) < 0 && (v3 * v4) < 0) {
    console.log(1);
} else if (v1 === 0 && v2 === 0 && v3 === 0 && v4 === 0) {
    // console.log('혹시 일로와?')
    const L1MaxX = Math.max(x1, x2);
    const L1MinX = Math.min(x1, x2);
    const L1MaxY = Math.max(y1, y2);
    const L1MinY = Math.min(y1, y2);

    const L2MaxX = Math.max(x3, x4);
    const L2MinX = Math.min(x3, x4);
    const L2MaxY = Math.max(y3, y4);
    const L2MinY = Math.min(y3, y4);

    if (
        (L1MaxX >= L2MinX)
        && (L1MaxY >= L2MinY)
        && (L2MaxX >= L1MinX)
        && (L2MaxY >= L1MinY)
    ) {
        console.log('1')
    } else {
        console.log(0)
    }
    
} else if (v1 === 0) {
    if (x1 >= Math.min(x3, x4) && x1 <= Math.max(x3, x4) && y1 >= Math.min(y3, y4) && y1 <= Math.max(y3, y4)) {
        console.log(1);
    } else {
        console.log(0);
    } 
} else if (v2 === 0) {
    if (x2 >= Math.min(x3, x4) && x2 <= Math.max(x3, x4) && y2 >= Math.min(y3, y4) && y2 <= Math.max(y3, y4)) {
        console.log(1);
    } else {
        console.log(0);
    } 
} else if (v3 === 0) {
    if (x3 >= Math.min(x1, x2) && x3 <= Math.max(x1, x2) && y3 >= Math.min(y1, y2) && y3 <= Math.max(y1, y2)) {
        console.log(1);
    } else {
        console.log(0);
    }
} else if (v4 === 0) {
    if (x4 >= Math.min(x1, x2) && x4 <= Math.max(x1, x2) && y4 >= Math.min(y1, y2) && y4 <= Math.max(y1, y2)) {
        console.log(1);
    } else {
        console.log(0);
    }
} else {
    console.log(0)
}



