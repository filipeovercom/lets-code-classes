class Queue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.minCount = 0;
    }

    enqueue(item) {
        this.items[this.count] = item;
        this.count++;
    }

    dequeue() {   
        if(this.isEmpty()) {
            return undefined;
        }
        const aux = this.items[this.minCount];
        delete this.items[this.minCount];
        this.minCount++;
        return aux;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.minCount];
    }

    isEmpty() {
        return this.count - this.minCount === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.minCount = 0;
    }

    size() {
        return this.count - this.minCount;
    }

    toString() {
        if(this.isEmpty()) {
            return "";
        }
        const items = Object.values(this.items);
        return items.join(", ");
    }
}


const fila = new Queue();
fila.enqueue("manga");
fila.enqueue("banana");
fila.enqueue("desodorante");
// fila.clear();
const string = fila.toString();


console.log(string);