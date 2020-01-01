import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <label style={{ display: "block" }} className="checkbox">
        <input type="checkbox" name="addItem" value={this.props.name}></input>
        {this.props.name}
      </label>
    );
  }
}

export default ListItem;
