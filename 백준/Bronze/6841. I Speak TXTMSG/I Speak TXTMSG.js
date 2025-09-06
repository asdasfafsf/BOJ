const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const dict = {
    "CU": "see you",
    ":-)": "I’m happy",
    ":-(": "I’m unhappy",
    ";-)": "wink",
    ":-P": "stick out my tongue",
    "(~.~)": "sleepy",
    "TA": "totally awesome",
    "CCC": "Canadian Computing Competition",
    "CUZ": "because",
    "TY": "thank-you",
    "YW": "you’re welcome",
    "TTYL": "talk to you later"
}

for (let word of input) {
    if (dict[word]) {
        console.log(dict[word])
        if (word === "TTYL") break
    } else {
        console.log(word)
    }
}