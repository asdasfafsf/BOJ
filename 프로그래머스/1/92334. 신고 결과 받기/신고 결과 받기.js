function solution(id_list, report, k) {
    var answer = [];
    const object = {};
    
    for (let i = 0; i < id_list.length; i++) {
        object[id_list[i]] = []
        answer.push(0);
    }
    
    for (let i = 0; i < report.length; i++) {
        let user = report[i].split(' ')[0];
        let target = report[i].split(' ')[1];
   
        
        if (object[target] && object[target].indexOf(user) == -1) {
            object[target].push(user);
        }
    }
    
    for (key in object) {
        if (object[key].length >= k) {
            for (let i = 0; i < object[key].length; i++) {
                const user = object[key][i];
                
                answer[id_list.indexOf(user)]++;
            }
        }
    }

    
    return answer;
}