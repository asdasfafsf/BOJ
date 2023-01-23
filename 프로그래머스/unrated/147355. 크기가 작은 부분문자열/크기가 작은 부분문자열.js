function solution(t, p) {
    return new Array(t.length - (p.length - 1))
        .fill(0)
        .map((element, index) => +t.substr(index, p.length))
        .filter(element => element <= p)
        .length;
}

