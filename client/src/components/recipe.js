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
              return (
                <li key={ingredient.name}>
                  {ingredient.name} {ingredient.amount} {ingredient.unit}
                </li>
              );
            })}
          </ul>
          <button
            className="button is-success is-inverted is-outlined"
            readOnly
            onClick={() =>
              this.props.addToQueue({
                name: this.props.name,
                ingredients: this.props.ingredients
              })
            }
          >
            Add to queue
          </button>
          <button
            className="button is-danger is-outlined"
            readOnly
            onClick={() => this.props.removeFromQueue(this.props.name)}
          >
            Remove from queue
          </button>
          <button
            className="button is-success is-inverted is-outlined"
            readOnly
            onClick={() => this.props.cookRecipe(this.props.name)}
          >
            I cooked this
          </button>
        </article>
      </div>
    );
  }
}

export default Result;
