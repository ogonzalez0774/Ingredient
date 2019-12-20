import React, { Component } from "react";
import ListItem from "./listItemComponent";

// state should be holding pantry and recipe list, used to generate list
const shoppingList = { fish: 1, lemon: 1, lettuce: 1, tomato: 1, egg: 1 };

class List extends Component {
  // updates user.pantry

  addAll() {}
  addSelected() {}

  // copies state, sends to database, then gets new data to set state

  render() {
    return (
      <form>
        <ul>
          {Object.keys(shoppingList).map(title => (
            <>
              <ListItem
                name={title}
                key={title}
                value={shoppingList[title]}
              ></ListItem>
              <br></br>
            </>
          ))}
        </ul>
        <button onClick={this.addSelected}>Add Selected Items</button>
        <button onClick={this.addAll}>Add All Items</button>
      </form>
    );
  }
}
export default List;
