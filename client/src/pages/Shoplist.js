import React from "react";
import API from "../utils/API";
import ListItem from "../components/listItem";
import Recipe from "../components/recipe";

class Shoplist extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    API.getUser(this.props.authUser.email).then(user => {
      const checkboxes = document.getElementsByName("addItem");
      const newIngredients = user.data.ingredients || {};

      checkboxes.forEach(element => {
        if (element.checked) {
          if (!newIngredients[element.value]) newIngredients[element.value] = 0;
          newIngredients[element.value] += this.props.shoppingList[
            element.value
          ];
        }
      });

      API.updateUser(this.props.authUser.email, {
        ingredients: newIngredients
      }).then(() => {
        this.props.loadPantry(this.props.authUser.email);
      });
    });
  };

  submitAll = event => {
    event.preventDefault();

    API.getUser(this.props.authUser.email).then(user => {
      const checkboxes = document.getElementsByName("addItem");
      const newIngredients = user.data.ingredients || {};

      checkboxes.forEach(element => {
        if (!newIngredients[element.value]) newIngredients[element.value] = 0;
        newIngredients[element.value] += this.props.shoppingList[element.value];
      });

      API.updateUser(this.props.authUser.email, {
        ingredients: newIngredients
      }).then(() => {
        this.props.loadPantry(this.props.authUser.email);
      });
    });
  };

  render() {
    return (
      // YELLOW BOX
      <div className="columns">
        <div className="column tile is-parent is-two-thirds">
          <article className="tile is-child notification is-bold is-warning">
            {/* QUEUE */}
            <div>
              <p className="subtitle">Queued Recipes:</p>
              <ul>
                {this.props.queuedRecipes.map(recipe => {
                  return (
                    <li key={recipe.name}>
                      <button
                        className="button is-warning is-light is-outlined is-inverted"
                        readOnly
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
                          addToQueue={this.props.addToQueue}
                          removeFromQueue={this.props.removeFromQueue}
                          cookRecipe={this.props.cookRecipe}
                        />
                      ) : (
                        <div className="hidden"></div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
        {/* SHOPPING LIST */}
        <div className="column tile is-parent">
          <article className="tile is-child notification is-bold is-info">
            <form onSubmit={this.handleSubmit}>
              <p className="subtitle">Shopping List</p>

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
                readOnly
                className="button is-info is-light is-outlined is-inverted"
              ></input>

              <input
                readOnly
                name="addAll"
                value="Add All"
                onClick={this.submitAll}
                className="button is-info is-light is-outlined is-inverted"
              ></input>
            </form>
            <br className="is-hidden-mobile" />
            <br className="is-hidden-mobile" />
          </article>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Shoplist;
