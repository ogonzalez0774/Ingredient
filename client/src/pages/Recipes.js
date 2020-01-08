import React from "react";
import API from "../utils/API";
import TestRecipe from "./TestRecipe";
import Recipe from "../components/recipe";

class Recipes extends React.Component {
  state = {
    search: "",
    result: []
  };

  handleFormSubmit = event => {
    this.recipeSearch(this.state.search);
  };

  recipeSearch = query => {
    // API.recipeSearch is not a function atm
    API.recipeSearch(query).then(res => this.setState({ result: res.data }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Will be passed as prop to Recipe components
  addToQueue = recipe => {
    API.getUser(this.props.userId).then(user => {
      console.log(user);
      const newRecipes = user.data.queuedRecipes;
      newRecipes.push(recipe);
      API.updateUser(this.props.userId, { queuedRecipes: newRecipes });
    });
  };

  render() {
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="container">
            <div className="box has-background-grey-lighter">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-bold has-background-grey">
                    <p className="title has-text-white">Search:</p>
                    <div className="field">
                      <div className="control">
                        {/* i recommend we make this a form to implement enter key input */}
                        <input
                          className="input is-success"
                          type="text"
                          name="search"
                          placeholder="What're you hungry for?"
                          onChange={this.handleInputChange}
                        />
                        <button
                          className="button is-success is-fullwidth"
                          onClick={this.handleFormSubmit}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/*<TestRecipe />*/}
              {this.state.result.map(recipe => (
                <Recipe
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  addToQueue={this.addToQueue}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default Recipes;
