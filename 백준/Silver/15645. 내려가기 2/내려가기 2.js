/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout,
});

 
let N;
let current = -1;
const mins = [0, 0, 0];
const maxs = [0, 0, 0];
rl.on("line", function (line) {
    if (!N) {
        N = +line;
    } else {
        const arr = line.split(' ').map(Number);
        const [min1, min2, min3] = mins;
        const [max1, max2, max3] = maxs;
        
        mins[0] = Math.min(min1, min2) + arr[0];
        mins[1] = Math.min(min1, min2, min3) + arr[1];
        mins[2] = Math.min(min2, min3) + arr[2];

        maxs[0] = Math.max(max1, max2) + arr[0];
        maxs[1] = Math.max(max1, max2, max3) + arr[1];
        maxs[2] = Math.max(max2, max3) + arr[2];
    }

    current++;

    if (current === N) {
        console.log(Math.max(...maxs), Math.min(...mins));
        rl.close()
    }
}).on("close", function () {
    process.exit(0);
});
