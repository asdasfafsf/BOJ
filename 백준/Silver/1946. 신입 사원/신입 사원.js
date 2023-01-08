const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.trim());


const T = +input[0]
let sum = 1;

for (let i = 0; i < T; i++) {
    const newRecruitList = new Array(+input[sum])
                            .fill(0)
                            .map( (element, index) => {
                                return input[index + sum + 1].split(' ');
                            })
                            .sort((a, b) => a[0] - b[0]);
    
    sum += +input[sum] + 1;

    let count = 0;
    let min = Number.MAX_VALUE;

    newRecruitList.forEach(newRecruit => {
        const grade = +newRecruit[1]

        if (min > grade) {
            count++;
            min = grade;
        }
    })

    console.log(count);
}



