function solution(s) {
    const map = {};

    return [...s]
            .map((element, index) => {
                if (typeof map[element] === 'undefined') {
                    map[element] = index;
                    return -1;
                }
        
                const res = index - map[element];
                map[element] = index;
        
                return res;
            })
}