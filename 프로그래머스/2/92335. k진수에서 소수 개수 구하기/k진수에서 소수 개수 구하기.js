function solution(n, k) {
    const num = n.toString(k);
    const nums = num.split('0').map(Number);

    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > 1 && isPrime(num)) {
            answer++;
        }
    }

    return answer;
}

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    const sqrtN = Math.sqrt(n);
    for (let i = 5; i <= sqrtN; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}