function toMinutes(time) {
    time = time.split(':').map(Number);
    
    return time[0] * 60 + time[1]
}

function solution(fees, records) {
    const answer = {};

    records = records.map(elem => elem.split(' '));
    
    const historyMap = new Map();
    
    for (const [time, carNo, action] of records) {
       if (action === 'IN') {
           historyMap.set(carNo, time);
           if (!answer[carNo]) {
               answer[carNo] = 0;
           }
       } else {
           const inMinutes = toMinutes(historyMap.get(carNo))
           const outMinutes = toMinutes(time);
           answer[carNo] += (outMinutes - inMinutes);
           historyMap.delete(carNo);
       }
    }
    
    const keys = historyMap.keys();
    for (const carNo of keys) {
        const inMinutes = toMinutes(historyMap.get(carNo));
        const outMinutes = toMinutes('23:59');
        
        historyMap.delete(carNo);
        answer[carNo] += (outMinutes - inMinutes)   
    }
    
    for (const carNo in answer) {
        let cost = fees[1];
        const remainder = answer[carNo] - fees[0];
        
        if (remainder > 0) {
            cost += fees[3] * Math.ceil(remainder / fees[2])
        }
        
        answer[carNo] = cost;
    }
    
    const result = Object.entries(answer)
    .sort((a, b) => a[0] - b[0])
    .map(elem => elem[1])
    .flat()
    
    return result;
}