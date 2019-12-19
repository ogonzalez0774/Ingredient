import React, { Children } from "react";

function FloatBox(props) {
  return (
    <div className="tile is-ancestor">
      <div className="container">
        <div className="box has-background-white">{Children}</div>
      </div>
    </div>
  );
}

export default FloatBox;
