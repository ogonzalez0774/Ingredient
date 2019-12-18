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
function pantryCheck(ingredient, groceries) {
  if (!pantry[ingredient]) pantry[ingredient] = 0;
  const clone = JSON.parse(JSON.stringify(groceries));
  groceries[ingredient] -= pantry[ingredient];
  pantry[ingredient] -= clone[ingredient];
  if (pantry[ingredient] < 0) {
    pantry[ingredient] = 0;
  }
  if (groceries[ingredient] <= 0) {
    delete groceries[ingredient];
  }
}

// simulated databse get result
const pantry = {
  salt: 10,
  chicken: 10,
  blackpepper: 10
};

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
      // groceries[ingredient.name] += ingredient.quantity;
      groceries[ingredient.name] = 1;
    });
  }

  for (const item in groceries) {
    pantryCheck(item, groceries);
  }

  console.log(groceries);
  console.log(pantry);
  // will use an ingredient library to convert mass to min purchasable amount
  // const printList = groceries.map(item => thiswillprobablybeanotherfunction([~item key~]))
}

generateList(schedule);
