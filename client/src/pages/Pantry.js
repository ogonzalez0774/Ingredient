import React from "react";
import API from "../utils/API";
import PantryItem from "../components/pantryItem";

class Pantry extends React.Component {
  state = {
    userId: "5dfafab3a612c2884b4bd0bd",
    ingredients: [
      {
        name: "chicken",
        amount: 0
      },
      {
        name: "bacon",
        amount: 0
      },
      {
        name: "ranch",
        amount: 0
      },
      {
        name: "lettuce",
        amount: 0
      }
    ]
  };

  componentDidMount() {
    this.loadPantry();
  }

  loadPantry() {
    API.getUser(this.state.userId).then(user => {
      this.setState({ ingredients: user.data.ingredients });
    });
  }

  togglePantryItem(userId, ingredientName) {
    const newIngredients = this.state.ingredients;
    for (const ingredient of newIngredients) {
      if (ingredient.name === ingredientName) {
        ingredient.amount = (ingredient.amount + 1) % 2;
      }
    }
    API.updateUser(userId, { ingredients: newIngredients });
    this.loadPantry();
  }

  render() {
    return this.state.ingredients.map(ingredient => (
      <PantryItem
        name={ingredient.name}
        key={ingredient.name}
        amount={ingredient.amount}
        onClick={() =>
          this.togglePantryItem(this.state.userId, ingredient.name)
        }
      />
    ));
  }
}

export default Pantry;
