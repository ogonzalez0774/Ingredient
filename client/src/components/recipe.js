import React from "react";

class Result extends React.Component {
  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification is-bold is-success">
          <p className="title">{this.props.name}</p>
          <p className="subtitle">
            Ingredients:{" "}
            <ul>
              {this.props.ingredients.map(ingredient => {
                return <li>{ingredient.name}</li>;
              })}
            </ul>
          </p>
        </article>
      </div>
    );
  }
}

export default Result;
