import React from "react";
import API from "../utils/API";
import ListItem from "../components/listItem";

class Shoplist extends React.Component {
    state = {
        shoppingList: {},

        schedule: [
            {
                name: "fish",
                ingredients: [
                    { name: "fish", quantity: 3 },
                    { name: "lemon", quantity: 1 },
                    { name: "salt", quantity: 1 },
                    { name: "blackpepper", quantity: 1 }
                ]
            },

            {
                name: "salad",
                ingredients: [
                    { name: "lettuce", quantity: 2 },
                    { name: "chicken", quantity: 1 },
                    { name: "tomato", quantity: 2 },
                    { name: "egg", quantity: 2 }
                ]
            },

            {
                name: "chicken",
                ingredients: [
                    { name: "chicken", quantity: 1 },
                    { name: "lemon", quantity: 1 },
                    { name: "salt", quantity: 1 },
                    { name: "blackpepper", quantity: 1 }
                ]
            }
        ]
    };

    pantryCheck(ingredient, groceries) {
        const pantry = this.props.ingredients;
        let ingredientAmount = 0;
        for (const item of pantry) {
            if (item.name === ingredient) {
                ingredientAmount = item.amount;
            }
        }
        // parse(stringify) generates a clone without altering original
        // const clone = JSON.parse(JSON.stringify(groceries));

        groceries[ingredient] -= ingredientAmount;

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
        this.props.loadPantry(this.props.userId);

        // pantry should elevate to global
        // async problem is mostly solved by mounting dynamically instead of on page load
        setTimeout(() => {
            this.generateList(this.state.schedule);
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
    handleSubmit = event => {
        event.preventDefault();
        API.getUser("5dfafab3a612c2884b4bd0bd").then(user => {
            const checkboxes = document.getElementsByName("addItem");
            const newIngredients = user.data.ingredients;
            checkboxes.forEach(element => {
                if (element.checked) {
                    // for now, will set items to quantity 1
                    newIngredients.forEach(ingredient => {
                        if (ingredient.name === element.value)
                            ingredient.amount = 1;
                    });
                }
                API.updateUser("5dfafab3a612c2884b4bd0bd", {
                    ingredients: newIngredients
                })
                    .then(() => {
                        this.props.loadPantry(this.props.userId);
                    })
                    .then(() => this.generateList(this.state.schedule));
            });
        });
        // this is undefined
        // this.loadPantry();
    };

    render() {
        return (
            <div classname="tile is-parent is-8">
                <article className="tile is-child notification is-bold is-warning">
                    <div>
                        <p className="subtitle">Queued Recipes:</p>
                        <ul>
                            {this.state.schedule.map(recipe => (
                                <button class="button is-warning is-light is-outlined is-inverted">
                                    {recipe.name}
                                </button>
                            ))}
                        </ul>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <p className="subtitle">Shopping List</p>

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
                            className="button is-warning is-light is-outlined is-inverted"
                        ></input>

                        <input
                            type="submit"
                            name="addAll"
                            value="Add All"
                            className="button is-warning is-light is-outlined is-inverted"
                        ></input>
                    </form>
                </article>
            </div>
        );
    }
}

export default Shoplist;
