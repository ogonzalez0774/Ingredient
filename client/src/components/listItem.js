import React from "react";
const units = require("../units.json");

class ListItem extends React.Component {
  render() {
    return (
      <label style={{ display: "block" }} className="checkbox">
        <input type="checkbox" name="addItem" value={this.props.name}></input>
        {this.props.name}{" "}
        {units[this.props.name].amount === "To Taste"
          ? "to taste"
          : this.props.value}{" "}
        {units[this.props.name].unit}
      </label>
    );
  }
}

export default ListItem;
