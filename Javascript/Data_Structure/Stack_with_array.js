class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // return this.items.length === 0;
        return !this.items.length;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

const stack = new Stack();
console.log(stack);

stack.push("Item 1");
stack.push("Item 2");

console.log(stack);
console.log("Stack size: ", stack.size());
console.log("Stack isEmpty: ", stack.isEmpty());
