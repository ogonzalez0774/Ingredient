import React from "react";
import API from "../utils/API";
import ListItem from "../components/listItem";

const schedule = {
  // not sure about this queue structure

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

class Shoplist extends React.Component {
  state = {
    shoppingList: {},

    // ingredients should come from global get
    ingredients: {},

    // unused for now:
    schedule: {}
  };

  loadPantry() {
    // structure for userid will be something like firebase.auth().currentuserid or something
    API.getUser("5dfafab3a612c2884b4bd0bd").then(user => {
      const getIngredients = {};
      user.data.ingredients.forEach(ingredient => {
        getIngredients[ingredient.name] = ingredient.amount;
      });
      this.setState({ ingredients: getIngredients });
    });
  }

  pantryCheck(ingredient, groceries) {
    const pantry = this.state.ingredients;

    if (!pantry[ingredient]) {
      pantry[ingredient] = 0;
    }

    // parse(stringify) generates a clone without altering original
    // const clone = JSON.parse(JSON.stringify(groceries));

    groceries[ingredient] -= pantry[ingredient];

    // does not alter pantry for now
    // pantry[ingredient] -= clone[ingredient];
    // if (pantry[ingredient] < 0) {
    //   pantry[ingredient] = 0;
    // }

    // we'll eventually want to delete amount0 items off pantry as well

    if (groceries[ingredient] <= 0) {
      delete groceries[ingredient];
    }
  }

  componentDidMount() {
    this.loadPantry();

    // pantry should elevate to global
    // async problem is mostly solved by mounting dynamically instead of on page load
    setTimeout(() => {
      this.generateList(schedule);
    }, 2000);
  }

  generateList(mealPlan) {
    const groceries = { fish: 1, lemon: 1, lettuce: 1, tomato: 1, egg: 1 };

    // function generates combined ingredients list regardless of pantry quantity
    for (const meal in mealPlan) {
      const recipe = mealPlan[meal];
      // forEach and forIn are async, there's probably a cleaner way to do this
      recipe.ingredients.forEach(ingredient => {
        if (!groceries[ingredient.name]) {
          groceries[ingredient.name] = 0;
        }

        // sets to 1 for now, not checking amounts
        // groceries[ingredient.name] += ingredient.quantity;
        groceries[ingredient.name] = 1;
      });
    }

    for (const item in groceries) {
      this.pantryCheck(item, groceries);
    }

    // will use an ingredient library to convert units to purchasable amount
    this.setState({ shoppingList: groceries });
  }

  // adding items to pantry:
  // needs different functions based on submit button
  handleSubmit(event) {
    event.preventDefault();
    API.getUser("5dfafab3a612c2884b4bd0bd").then(user => {
      const checkboxes = document.getElementsByName("addItem");
      const newIngredients = user.data.ingredients;
      checkboxes.forEach(element => {
        if (element.checked) {
          // for now, will set items to quantity 1
          newIngredients.forEach(ingredient => {
            if (ingredient.name === element.value) ingredient.amount = 1;
          });
        }
        API.updateUser("5dfafab3a612c2884b4bd0bd", {
          ingredients: newIngredients
        });
      });
    });
    // this is undefined
    // this.loadPantry();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h3>Shopping List</h3>

          {Object.keys(this.state.shoppingList).map(title => (
            <>
              <ListItem
                name={title}
                // unsure how to satisfy unique key condition. this isn't it
                key={"list" + title}
                value={this.state.shoppingList[title]}
              ></ListItem>
              <br />
            </>
          ))}

          <input
            type="submit"
            name="addSelected"
            value="Add Selected"
            className="button is-success is-light is-outlined is-inverted"
          ></input>

          <input
            type="submit"
            name="addAll"
            value="Add All"
            className="button is-success is-light is-outlined is-inverted"
          ></input>
        </form>
      </>
    );
  }
}

export default Shoplist;
