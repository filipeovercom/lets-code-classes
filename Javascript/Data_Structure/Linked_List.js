class Node {
    constructor(item) {
        this.item = item;
        this.next = undefined;
    }
}


class LinkedList {
    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    push(item) {
        const node = new Node(item);

        let currentNode;

        if(this.head == undefined) {
            this.head = node;
        }
        else {
            currentNode = this.head;

            while(currentNode.next != undefined) {
                currentNode = currentNode.next; 
            }

            currentNode.next = node;
        }
        this.count++;
    }

    indexOf(item) {
        let currentNode = this.head;

        for(let i = 0; i < this.count && currentNode != undefined; i++) {
            if(item == currentNode.item) {
                return i;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    removeAt(index) { // 1
        if(index < this.count && index >= 0) {
            let currentNode = this.head;

            if(index == 0) {
                this.head = currentNode.next;
            }
            else {
                let aux; // undefined
                for(let i = 0; i < index; i++) { // i = 1 / index = 1
                    aux = currentNode; // 1
                    currentNode = currentNode.next; // 2
                }
                aux.next = currentNode.next;
            }

            this.count--;
            return currentNode.item;
        }

        return undefined;
    }
    
    remove(item) {
        const index = this.indexOf(item);
        return this.removeAt(index);
    }
}

const lista = new LinkedList();


lista.push(3);
lista.push(5);
lista.push(7);

const remove = lista.remove(5)

console.log(lista);
console.log("remove", remove);