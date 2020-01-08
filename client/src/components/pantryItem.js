import React from "react";

class PantryItem extends React.Component {
  render() {
    if (this.props.quantity > 0) {
      return (
        <button
          className="button is-success is-light is-outlined is-inverted"
          onClick={this.props.onClick}
        >
          {this.props.name}, {this.props.quantity}
        </button>
      );
    } else return null;
  }
}

export default PantryItem;
