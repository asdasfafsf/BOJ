function solution(info, edges) {

    const graph = Array.from(Array(info.length), () => []);
    for (const [p, c] of edges) {
        graph[p].push(c);
    }
    
    const stack = [[0, 1, 0, [...graph[0]]]];
    let answer = 1;
  
    while (stack.length) {
        const [node, sheep, wolf, possibles] = stack.pop();
        answer = Math.max(answer, sheep);
        
        for (let i = 0; i < possibles.length; i++) {
            const posNode = possibles[i];
            const newSheep = sheep + (info[posNode] === 0);
            const newWolf = wolf + (info[posNode] === 1);
            
            if (newWolf >= newSheep) {
                continue;
            }

            const newPossibles = [...possibles];
            newPossibles.splice(i, 1);
            newPossibles.push(...graph[posNode]);
            stack.push([posNode, newSheep, newWolf, newPossibles]);
        }
    }
    
    return answer;
}