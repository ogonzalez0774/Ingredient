import React from "react";
import API from "../../utils/API";
import PantryItem from "../PantryItem";
import Header from "../header/header";
import Footer from "../footer/footer";

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
        return (
            <>
                <Header />
                <div className="tile is-parent is-8">
                    <article className="tile is-child notification is-bold is-success">
                        <p className="title">My Pantry:</p>
                        <p className="subtitle has-text-centered">
                            {this.state.ingredients.map(ingredient => (
                                <PantryItem
                                    name={ingredient.name}
                                    amount={ingredient.amount}
                                    onClick={() =>
                                        this.togglePantryItem(
                                            this.state.userId,
                                            ingredient.name
                                        )
                                    }
                                />
                            ))}
                        </p>
                    </article>
                </div>
                <Footer />
            </>
        );
    }
}

export default Pantry;
