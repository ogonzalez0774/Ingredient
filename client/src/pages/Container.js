import React from "react";
import Pantry from "./Pantry";
import Shoplist from "./Shoplist";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Pantry></Pantry>
        <Shoplist></Shoplist>
      </div>
    );
  }
}

export default Container;
