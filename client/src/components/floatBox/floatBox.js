import React, { Children } from "react";

class FloatBox extends React.Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="container">
          <div className="box has-background-white">{Children}</div>
        </div>
      </div>
    );
  }
}

export default FloatBox;
