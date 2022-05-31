// n! = n * (n -1)!
// n! = 0! = 1
// n! = 1! = 1

function fatorial(n) {
    if(n < 0) return undefined;
    let total = 1;

    for(let i = n; i > 1; i--) {
        total *= i;
    }

    return total;
}

function fatorial(n) {
    if(n < 0) return undefined;
    let total = 1;

    for(let i = n; i > 1; i--) {
        total *= i;
    }

    return total;
}

function fatorialRecursivo(n) {
    if(n < 0) return undefined;  
    if(n < 2) return 1;
    return n * fatorialRecursivo(n - 1);    
}

console.log(f);

function fibonacciArray(n) {
    const f = [0, 1];

    for (let i = 2; i <= n; i++) {
        const valor = f[i - 1] + f[i - 2];
        f.push(valor);
    }

    return f[n];
}

const fb = fibonacciArray(10);
console.log(fb)

function fibonacciFor(n) {
    if(n < 0) return undefined;
    if(n < 1) return 0;
    if(n < 2) return 1;

    let min = 0;
    let max = 1;
    let fib = n;

    for(let i = 2; i <= n; i++) {
        fib = min + max;
        min = max;
        max = fib;
    }

    return fib;
}

const f = fibonacciFor(10);
console.log(f);