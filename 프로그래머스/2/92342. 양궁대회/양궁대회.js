
function solution(n, info) {
    let answer = [-1];
    let max = 0;
    
 
    let isPrint = false;
    let isLog = false;
    const recursion = (depth, rInfo) => {
        if (depth === n) {
            let aScore = 0;
            let rScore = 0;
            
            for (let i = 0; i < 10; i++) {
                if (rInfo[i] > info[i]) {
                    rScore += (10 - i)
                } else if (info[i] > 0) {
                    aScore += (10 - i);
                }
            }
            const diff = rScore - aScore;

            if (diff > max) {
                max = diff;
                answer = [...rInfo];
            } else if (diff === max && diff > 0) {
                for (let i = 10; i >= 0; i--) {
                    if (answer[i] > rInfo[i]) {
                        break;
                    } else if (answer[i] < rInfo[i]) {
                        answer = [...rInfo];
                        break;
                    }
                }
            }
            return;
        }
        
        
        for (let i = 0; i < 11; i++) {
            const diff = info[i] - rInfo[i] + 1;
            
     
            
            if (rInfo[i] === 0 && diff > 0 && depth + diff <= n) {
                rInfo[i] += diff;
  
                recursion(depth + diff, rInfo);
                rInfo[i] -= diff;
            } else {
                // 더이상 점수를 못얻음
                rInfo[i] += (n - depth);
                recursion(n, rInfo);
                rInfo[i] -= (n - depth);
               
 
            }
        }
    }
    
    recursion(0, Array(11).fill(0))
    
    return answer;
}
/**

[2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
10.       7
[0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0]
    9. 8.    6
    
17 23


[2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
10. 0  0. 0
[0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    9. 8.    0
    
10 17

**/