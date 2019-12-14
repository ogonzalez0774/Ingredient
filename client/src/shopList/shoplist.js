const schedule = {
  //   "10-DEC-19": {
  //     name: "i messed up",
  //     ingredients: [{ name: "salt", quantity: 100 }]
  //   },

  "14-DEC-19": {
    name: "fish",
    ingredients: [
      { name: "fish", quantity: 3 },
      { name: "lemon", quantity: 1 },
      { name: "salt", quantity: 1 },
      { name: "blackpepper", quantity: 1 }
    ]
  },

  "15-DEC-19": {
    name: "salad",
    ingredients: [
      { name: "lettuce", quantity: 2 },
      { name: "chicken", quantity: 1 },
      { name: "tomato", quantity: 2 },
      { name: "egg", quantity: 2 }
    ]
  },

  "16-DEC-19": {
    name: "chicken",
    ingredients: [
      { name: "chicken", quantity: 1 },
      { name: "lemon", quantity: 1 },
      { name: "salt", quantity: 1 },
      { name: "blackpepper", quantity: 1 }
    ]
  }
};

// this can probably just be inside generateList()
function pantryCheck(ingredient) {
  // pantry will hold quantity by mass
  // removes amount from pantry and shopping list
  // still need more -> true, otherwise false?
  return true;
}

function generateList(mealPlan) {
  const groceries = {};

  // function generates combined ingredients list regardless of pantry quantity
  for (const meal in mealPlan) {
    const recipe = mealPlan[meal];
    // forEach and forIn are async, there's probably a cleaner way to do this
    recipe.ingredients.forEach(ingredient => {
      if (!groceries[ingredient.name]) {
        groceries[ingredient.name] = 0;
      }
      groceries[ingredient.name] += ingredient.quantity;
    });
  }

  //   for (const item in groceries) {
  //     if (pantryCheck(item)) {
  //       console.log(":)");
  // should only return items that need to be bought after pantryCheck()
  // if groceries[ingredient.name] === 0, delete groceries[ingredient.name]
  //     }
  //   }

  // will use an ingredient library to convert mass to min purchasable amount
  // const printList = groceries.map(item => thiswillprobablybeanotherfunction([~item key~]))
  return console.log(groceries);
}

generateList(schedule);
