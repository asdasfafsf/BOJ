const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const seminarToRoom = {
    Algorithm: '204',
    DataAnalysis: '207',
    ArtificialIntelligence: '302',
    CyberSecurity: 'B101',
    Network: '303',
    Startup: '501',
    TestStrategy: '105'
}

for (let i = 1; i <= Number(input[0]); i++) {
    console.log(seminarToRoom[input[i]])
}