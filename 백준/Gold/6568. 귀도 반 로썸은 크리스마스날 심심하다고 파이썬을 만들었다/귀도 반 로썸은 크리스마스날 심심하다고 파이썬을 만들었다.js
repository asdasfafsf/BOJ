const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i += 32) {
    const memory = input.slice(i, i + 32)
        .map(elem => elem.trim());

    let adder = 0;
    let pc = 0;

    while (memory[pc]) {
        const command = memory[pc].slice(0, 3);
        const data = parseInt(memory[pc].slice(3), 2);

        pc = (pc + 1) & 0b11111;

        if (command === '000') { 
            memory[data] = adder.toString(2).padStart(8, '0');
        } else if (command === '001') { 
            adder = parseInt(memory[data], 2);
        } else if (command === '010') { 
            if (adder === 0) { 
                pc = data;
            }
        } else if (command === '011') { 
            continue;
        } else if (command === '100') { 
            adder = (adder - 1) & 0xFF;
        } else if (command === '101') { 
            adder = (adder + 1) & 0xFF;
        } else if (command === '110') { 
            pc = data;
        } else if (command === '111') { 
            break;
        }
    }

    console.log(adder.toString(2).padStart(8, '0'));
}