import React from "react";
import API from "../utils/API";
import PantryItem from "../components/PantryItem";

class Pantry extends React.Component {
    componentDidMount() {
        this.props.loadPantry(this.props.userId);
    }

    togglePantryItem(userId, ingredientName) {
        const newIngredients = this.props.ingredients;
        for (const ingredient of newIngredients) {
            if (ingredient.name === ingredientName) {
                ingredient.amount = (ingredient.amount + 1) % 2;
            }
        }
        API.updateUser(userId, { ingredients: newIngredients });
        this.props.loadPantry();
    }

    render() {
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
                                        this.props.userId,
                                        ingredient.name
                                    )
                                }
                            />
                        ))}
                    </p>
                </article>
            </div>
        );
    }
}

export default Pantry;
