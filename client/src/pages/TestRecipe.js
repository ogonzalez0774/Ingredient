import React from "react";
import API from "../utils/API";
import Recipe from "../components/recipe";

class TestRecipe extends React.Component {
  state = {
    recipes: [
      {
        name: "Chicken Alfredo",
        ingredients: [
          "Kosher salt",
          "freshly ground black pepper",
          "fettuccine",
          "Olive oil",
          "chicken breast",
          "unsalted butter",
          "heavy cream",
          "freshly grated nutmeg",
          "Parmigiano-Reggiano"
        ]
      },
      {
        name: "BLT",
        ingredients: ["bacon", "lettuce", "tomato", "bread", "mayo"]
      },
      {
        name: "Cheese Burger",
        ingredients: [
          "ground beef",
          "lettuce",
          "tomato",
          "bread",
          "mayo",
          "cheese"
        ]
      },
      {
        name: "Pizza",
        ingredients: ["tomato sauce", "cheese", "dough", "pepperoni"]
      }
    ]
  };

  componentDidMount() {}

  toggleIngredient() {}

  render() {
    return (
      <div>
        {this.state.recipes.map(recipe => (
          <div className="tile">
            <div className="tile is-parent">
              <article className="tile is-child notification is-bold has-background-grey-light">
                <p className="title has-text-white">{recipe.name}:</p>
                <p className="subtitle has-text-white">
                  Ingredients used: &nbsp;
                  {recipe.ingredients.map(ingredient => (
                    <span>{ingredient}, </span>
                  ))}
                </p>
                <p className="has-text-white">...Brief overview of recipe...</p>
              </article>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TestRecipe;
