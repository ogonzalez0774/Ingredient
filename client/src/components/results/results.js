import React from "react";
import API from "../../utils/API";
import Recipe from "../../pages/TestRecipe";

class Results extends React.Component {
  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification is-bold is-success">
          <p className="title">{Recipe.state.recipes.name | "Recipe Name"}</p>
          <p className="subtitle">
            {Recipe.steps |
              "This lovely dish is the first one we found! It incorporates flavors and scents from many, many different cultures around the..."}
          </p>
          <p className="subtitle">
            {Recipe.state.recipes.ingredients |
              "Butter, Watermelon, Camel Meat, Brussel Sprouts"}
          </p>
        </article>
      </div>
    );
  }
}

export default Results;
