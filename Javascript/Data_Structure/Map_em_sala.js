const cep = new Map([
    [546546, "Rua dos jangadeiros"],
    [159753, "Rua dos marinheiros"],
]);

console.log(cep);
console.log(cep.get(546546));

cep.set(45879, "Rua das marias");
console.log(cep.get(45879));

cep.delete(45879);
console.log(cep.get(45879));