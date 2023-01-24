function solution(s) {
    let answer = 0;
    
    let count1 = 0;
    let count2 = 0;
    
    let target = '';
    
    for (let i = 0; i < s.length; i++) {
        console.log(count1);
        if (target === '') {
            target = s[i];
        }
        
        if (target === s[i]) {
            count1++;
        } else {
            count2++;
        }
        
        if (count1 > 0 && count1 === count2) {
            answer++;
            count1 = 0;
            count2 = 0;
            target = '';
        } else if (i == s.length - 1) {
            answer++;
        }
        
    }
    
    return answer;
}