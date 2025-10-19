function isEnoughCapacity(products, containerSize) {
  const allFruitsArr = Object.values(products);

  let allFruits = 0;
  for (const fruit of allFruitsArr) {
    allFruits += fruit;
  }
  return allFruits <= containerSize
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));