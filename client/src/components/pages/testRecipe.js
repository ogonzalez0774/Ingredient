import React from "react";
import API from "../../utils/API";
import Recipe from "../Recipe";

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
        return this.state.recipes.map(recipe => (
            <Recipe name={recipe.name} ingredients={recipe.ingredients} />
        ));
    }
}

export default TestRecipe;
