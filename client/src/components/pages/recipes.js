import React from "react";
import API from "../../utils/API";

class recipe extends React.Component {
  state = {
    search: "",
    result: []
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRecipes(this.state.search);
  };

  searchRecipes = query => {
    API.search(query).then(res => this.setState({ result: res.data }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <p>Your Searched For {this.state.search}</p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default recipe;
