import React from "react";
import API from "../../utils/API";
import PantryItem from "../pantryItem";

class Pantry extends React.Component {
    state = {
        userId: 0,
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
        API.getUser({ id: this.state.userId }).then(user => {
            this.setState({ ingredients: user.ingredients });
        });
    }

    togglePantryItem(userId) {
        API.updateUser(
            { id: userId },
            {
                $set: {
                    ingredients: this.state.ingredients.map(ingredient => {
                        const newIngredient = {
                            name: ingredient.name,
                            amount: (ingredient.amount + 1) % 2
                        };
                        return newIngredient;
                    })
                }
            }
        );
        this.loadPantry();
    }

    render() {
        return this.state.ingredients.map(ingredient => (
            <pantryItem
                name={ingredient.name}
                onClick={() => togglePantryItem(userId)}
            />
        ));
    }
}

export default Pantry;
