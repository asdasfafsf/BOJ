const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               


const [N] = input;
const commandList = input.slice(1);




class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }

    getData = () => {
        return this.data;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push = (data) => {
        const nextNode = new Node(data, this.top);
        this.top = nextNode;
        this.length++;
    }

    pop = () => {
        const currentHeadNode = this.top;
        const nextHeadNode = currentHeadNode?.next;
        this.top = nextHeadNode ?? null;
        
        if (this.length > 0) {
            this.length--;
        }
        return currentHeadNode?.data ?? null;
    }

    peek = () => {
        return this?.top?.data ?? null;
    }


    isEmpty = () => {
        return this.length === 0
    }

    isFull = () => {
        return this.length > 0;
    }

    size = () => {
        return this.length;
    }
}

const stack = new Stack();



let result = '';

commandList.forEach(commands => {
    const [command, data] = commands.split(' ').map(Number);

    if (command === 1) {
        stack.push(data);
    } else if (command === 2) {
        result += (stack.isEmpty() ? -1 : stack.pop()) + '\n';
    } else if (command === 3) {
        result += stack.size() + '\n';
    } else if (command === 4) {
        result += (stack.isEmpty() ? 1 : 0) + '\n'; 
    } else if (command === 5) {
        result += (stack.isEmpty() ?  -1 : stack.peek()) + '\n';
    }

})

console.log(result.trim())