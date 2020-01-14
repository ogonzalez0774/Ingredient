import React from "react";
import API from "../utils/API";
import Recipe from "../components/recipe";

class Recipes extends React.Component {
  state = {
    search: "",
    result: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.recipeSearch(this.state.search).then(res => {
      this.setState({ result: res.data });
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="tile is-ancestor">
        <div className="container">
          <div className="box has-background-white">
            <div className="tile">
              <div className="tile is-parent">
                <form
                  onSubmit={this.handleFormSubmit}
                  className="tile is-child notification is-bold has-background-grey-light"
                >
                  <p className="title has-text-white">Search:</p>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-success"
                        type="text"
                        name="search"
                        placeholder="What're you hungry for?"
                        onChange={this.handleInputChange}
                      />
                      <input
                        className="button is-success"
                        readOnly
                        type="submit"
                        value="Search"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {this.state.result.map(recipe => (
              <Recipe
                name={recipe.name}
                ingredients={recipe.ingredients}
                addToQueue={this.props.addToQueue}
                removeFromQueue={this.props.removeFromQueue}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Recipes;
