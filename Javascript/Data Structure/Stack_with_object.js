class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    pop() {   
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const aux = this.items[this.count];
        delete this.items[this.count];
        return aux;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        // return !this.count;
        return this.count === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }
}

const pilha = new Stack();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.pop();
pilha.push(5);
pilha.clear();
// pilha.pop();
// pilha.pop();
// pilha.pop();

const peek = pilha.peek();
const isEmpty = pilha.isEmpty();
const size = pilha.size();

console.log(pilha, size, isEmpty, peek);