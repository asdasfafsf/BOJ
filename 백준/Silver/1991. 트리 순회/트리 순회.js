let fs = require('fs');
const input = (fs.readFileSync('/dev/stdin').toString().split('\n').map(e => e.split(' ')));


const arr = input.slice(1, input.length - 1);


let pre = '';

const preOrder = (arr, target) => {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index][0] === target) {
            break;
        }
    }

    // console.log(arr[index][0]);
    pre += arr[index][0];

    if (arr[index][1] != '.') {
        preOrder(arr, arr[index][1], target);
    }

    if (arr[index][2] != '.') {
        preOrder(arr, arr[index][2], target);
    }
}


let ino = '';

const inOrder = (arr, target) => {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index][0] === target) {
            break;
        }
    }


    if (arr[index][1] != '.') {
        inOrder(arr, arr[index][1], target);
    }
    
    // console.log(arr[index][0]);
    ino += arr[index][0];

    if (arr[index][2] != '.') {
        inOrder(arr, arr[index][2], target);
    }


}


let po = '';
const postOrder = (arr, target) => {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index][0] === target) {
            break;
        }
    }


    if (arr[index][1] != '.') {
        postOrder(arr, arr[index][1], target);
    }

    if (arr[index][2] != '.') {
        postOrder(arr, arr[index][2], target);
    }


    // console.log(arr[index][0]);

    po += arr[index][0];
}

preOrder(arr, arr[0][0]);
inOrder(arr, arr[0][0]);
postOrder(arr, arr[0][0]);



console.log(pre);
console.log(ino);
console.log(po);
