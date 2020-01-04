import React from "react";
import API from "../utils/API";
import PantryItem from "../components/pantryItem";

class Pantry extends React.Component {
  togglePantryItem(userEmail, ingredientName) {
    const newIngredients = this.props.ingredients;

    for (const ingredient of newIngredients) {
      if (ingredient.name === ingredientName) {
        ingredient.amount = (ingredient.amount + 1) % 2;
      }
    }
    API.updateUser(userEmail, { ingredients: newIngredients });
    this.props.loadPantry(userEmail);
  }

  render() {
    // if (this.props.authUser) {
    return (
      <div className="tile is-parent is-8">
        <article className="tile is-child notification is-bold is-success">
          <p className="title">My Pantry:</p>
          <p className="subtitle has-text-centered">
            {this.props.ingredients.map(ingredient => (
              <PantryItem
                name={ingredient.name}
                key={ingredient.name}
                amount={ingredient.amount}
                onClick={() =>
                  this.togglePantryItem(
                    this.props.authUser.email,
                    ingredient.name
                  )
                }
              />
            ))}
          </p>
        </article>
      </div>
    );
    // } else return "";
  }
}

export default Pantry;
