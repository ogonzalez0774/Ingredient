import React from "react";

class Result extends React.Component {
  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification is-bold is-success">
          <p className="title">{this.props.name}</p>
          <p className="subtitle">Ingredients: </p>
          <ul>
            {this.props.ingredients.map(ingredient => {
              return <li key={ingredient.name}>{ingredient.name}</li>;
            })}
          </ul>
        </article>
      </div>
    );
  }
}

export default Result;
