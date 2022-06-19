
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const node = new Node(key);

        if (this.root == null) {
            this.root = node;
        }
        else {
            this.#insertNode(this.root, key);
        }
    }

    #insertNode(node, key) {
        if (key == node.key) {
            // incrementa o contador
            return;
        }
        else if (key < node.key) {
            if (node.left == null) {
                node.left = new Node(key);
            }
            else {
                this.#insertNode(node.left, key);
            }
        }
        else if (key > node.key) {
            if (node.right == null) {
                node.right = new Node(key);
            }
            else {
                this.#insertNode(node.right, key);
            }
        }
        return undefined; // não precisa ter retorno undefined
    }

    #minNode(node) {
        let currentNode = node;
        while (node != null && node.left != null) {
            currentNode = node.left;
        }
        return currentNode;
    }

    remove(key) {
        this.root = this.#removeNode(this.root, key);
    }

    #removeNode(node, key) {
        if (this.root == null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.#removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.#removeNode(node.right, key);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            else if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            const auxNode = this.#minNode(node.right);
            node.key = auxNode.key;
            node.right = this.#removeNode(node.right, auxNode.key);
            return node;
        }
    }

}

// Fatores de balanceamento

// desbalanceado para direita = 1,
// levemente desbalanceado para direita = 2,
// balanceado 3,
// levemente desbalanceado para esquerda = 4,
// desbalanceado para esquerda = 5


// AVL
class AVLTree extends BinarySearchTree {
    constructor() {
        super();
        this.root = null;
    }

    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }

        const height = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
        return height + 1;
    }

    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        switch (heightDifference) {
            case -2:
                return 1; // desbalanceado para direita
            case -1:
                return 2; // pouco desbalanceado para direita
            case 1:
                return 4; // pouco desbalanceado para esquerda
            case 2:
                return 5; // desbalanceado para esquerda
            default:
                return 3; // balanceado
        }
    }

    rotationLL(node) {
        const aux = node.left;
        node.left = aux.right;
        aux.right = node;
        return aux;
    }

    rotationRR(node) {
        const aux = node.right;
        node.right = aux.left;
        aux.left = node;
        return aux;
    }

    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key) {
        this.root = this.#insertNode(this.root, key);
    }

    #insertNode(node, key) {
        if (node == null) {
            return new Node(key);
        }
        else if (key < node.key) {
            node.left = this.#insertNode(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.#insertNode(node.right, key);
        }
        else {
            return node; // chave duplicada
        }

        // balanceia a árvore, se for necessário
        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === 5) { // desbalanceado para esquerda
            if (key < node.left.key) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }

        if (balanceFactor === 1) { // desbalanceado para direita
            if (key > node.right.key) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }

        return node;
    }

    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == null) {
            return node; // null, não é necessário balancear
        }

        // verifica se a árvore está balanceada
        const balanceFactor = this.getBalanceFactor(node);
        
        if (balanceFactor === 5) { // desbalanceado para esquerda
            const balanceFactorLeft = this.getBalanceFactor(node.left);

            if (balanceFactorLeft === 3 || balanceFactorLeft === 4) { // balanceado ou levemente balanceada para esquerda
                return this.rotationLL(node);
            }
            if (balanceFactorLeft === 2) { // levemente desbalanceado para direita
                return this.rotationLR(node.left);
            }
        }
        if (balanceFactor === 1) { // desbalanceado para direita
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (balanceFactorRight === 3 || balanceFactorRight === 2) { // balanceado ou levemente balanceado para direita
                return this.rotationRR(node);
            }
            if (balanceFactorRight === 4) { // levemente desbalanceado para esquerda
                return this.rotationRL(node.right);
            }
        }
        return node;
    }
}



const tree = new AVLTree();

tree.insert(67);
tree.insert(54);
tree.insert(90);
tree.insert(29);
tree.insert(60);
tree.insert(58);
tree.remove(60);


console.log(JSON.stringify(tree));