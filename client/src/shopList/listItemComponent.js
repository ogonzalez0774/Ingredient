import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <label className="checkbox">
        <input type="checkbox" />
        {this.props.name} : {this.props.number}
      </label>
    );
  }
}
export default ListItem;
