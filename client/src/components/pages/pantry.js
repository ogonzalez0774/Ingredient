import React from "react";
import API from "../../utils/API";
import pantryItem from "../pantryItem";

class pantry extends React.Component {
    state = {
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

    componentDidMount() {}

    toggleIngredient() {}

    render() {
        return this.state.ingredients.map(ingredient => (
            <pantryItem name={ingredient.name} />
        ));
    }
}
