function setApp() {
  class Fruit {
    constructor(name) {
      this.name = name;
    }

    toString() {
      return this.name;
    }

    equals(anotherFruit) {
      if (anotherFruit instanceof Fruit) {
        return anotherFruit.name === this.name;
      }

      return false;
    }
  }

  const fruits = [
    new Fruit("banana"),
    new Fruit("strawberry"),
    new Fruit("grape"),
    new Fruit("lemon"),
    new Fruit("orange"),
    new Fruit("orange"),
  ];

  const uniqueFruits = [];

  fruits.forEach((fruit) => {
    if (uniqueFruits.findIndex((uniqFruite) => fruit.equals(uniqFruite)) < 0) {
      uniqueFruits.push(fruit);
    }
  });

  console.log(`${fruits}`);
  console.log(`${uniqueFruits}`);

  const fruitsSet = new Set(fruits);

  fruitsSet.add("bananas");

  fruitsSet.forEach((fruit) => console.log(`Fruta: ${fruit}`));

  class MySet {
    constructor(array) {
      array = this.#deepClear(array);

      this.values = Object.assign({}, array);
    }

    #deepClear(array) {
      var result = [];

      array.forEach((element) => {
        if (typeof element === "object") {
          if (result.findIndex((ele) => ele.equals(element)) < 0) {
            result.push(element);
          }
        } else {
          if (!result.includes(element)) {
            result.push(element);
          }
        }
      });

      return result;
    }
  }

  console.log(new MySet(fruits).values);
}


setApp();