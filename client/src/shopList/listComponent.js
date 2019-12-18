import React, { Component } from "react";
import ListItem from "./listItemComponent";

// this will be passed in from
const shoppingList = { fish: 1, lemon: 1, lettuce: 1, tomato: 1, egg: 1 };

class List extends Component {
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
        <button>Add Selected Items</button>
        <button>Add All Items</button>
      </form>
    );
  }
}
export default List;
