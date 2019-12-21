import React from "react";
import API from "../utils/API";
import ListItem from "../components/listItem";
import Recipe from "../components/recipe";

class Shoplist extends React.Component {
  state = {
    shoppingList: {}
  };

  //   pantryCheck(ingredient, groceries) {
  //     const pantry = this.props.ingredients;
  //     let ingredientAmount = 0;
  //     for (const item of pantry) {
  //       if (item.name === ingredient) {
  //         ingredientAmount = item.amount;
  //       }
  //     }
  //     groceries[ingredient] -= ingredientAmount;

  // parse(stringify) generates a clone without altering original
  // const clone = JSON.parse(JSON.stringify(groceries));

  // does not alter pantry for now
  // pantry[ingredient] -= clone[ingredient];
  // if (pantry[ingredient] < 0) {
  //   pantry[ingredient] = 0;
  // }

  // we'll eventually want to delete amount0 items off pantry as well

  //     if (groceries[ingredient] <= 0) {
  //       delete groceries[ingredient];
  //     }
  //   }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.generateList(this.props.queuedRecipes);
  //     }, 1500);
  //   }

  //   generateList(mealPlan) {
  //     const groceries = { fish: 1, lemon: 1, lettuce: 1, tomato: 1, egg: 1 };

  //     // function generates combined ingredients list regardless of pantry quantity
  //     for (const meal in mealPlan) {
  //       const recipe = mealPlan[meal];

  //       // forEach and forIn are async, there's probably a cleaner way to do this
  //       recipe.ingredients.forEach(ingredient => {
  //         if (!groceries[ingredient.name]) {
  //           groceries[ingredient.name] = 0;
  //         }

  //         // sets to 1 for now, not checking amounts
  //         // groceries[ingredient.name] += ingredient.quantity;
  //         groceries[ingredient.name] = 1;
  //       });
  //     }

  //     for (const item in groceries) {
  //       this.pantryCheck(item, groceries);
  //     }

  //     // will use an ingredient library to convert units to purchasable amount
  //     this.setState({ shoppingList: groceries });
  //   }

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
            if (ingredient.name === element.value) ingredient.amount = 1;
          });
        }
        API.updateUser("5dfafab3a612c2884b4bd0bd", {
          ingredients: newIngredients
        }).then(() => {
          this.props.loadPantry(this.props.userId);
        });
        //   .then(() => this.generateList(this.props.queuedRecipes));
      });
    });
  };

  render() {
    return (
      <div className="tile is-parent is-8">
        <article className="tile is-child notification is-bold is-warning">
          <div>
            <p className="subtitle">Queued Recipes:</p>
            <ul>
              {this.props.queuedRecipes.map(recipe => {
                return (
                  <li key={recipe.name}>
                    <button
                      className="button is-warning is-light is-outlined is-inverted"
                      onClick={() => {
                        const mealSchedule = this.props.queuedRecipes;
                        for (const scheduledRecipe of mealSchedule) {
                          if (scheduledRecipe.name === recipe.name) {
                            scheduledRecipe.toggleShow = !scheduledRecipe.toggleShow;
                          }
                        }
                        this.setState({
                          schedule: mealSchedule
                        });
                      }}
                    >
                      {recipe.name}
                    </button>
                    {recipe.toggleShow ? (
                      <Recipe
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                      />
                    ) : (
                      <div className="hidden"></div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <form onSubmit={this.handleSubmit}>
            <p className="subtitle">Shopping List</p>

            {/* {console.log(this.props.shoppingList)} */}
            {Object.keys(this.props.shoppingList).map(title => (
              <ListItem
                name={title}
                // unsure how to satisfy unique key condition. this isn't it
                key={"list" + title}
                value={this.props.shoppingList[title]}
              ></ListItem>
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
