import React from "react";
import recipe from "./pages/recipes";

class result extends React.Component {
  render() {
    return (
      <div class="tile is-parent">
        <article class="tile is-child notification is-bold is-success">
          <p class="title">Recipe Number One</p>
          <p class="subtitle">
            This lovely dish is the first one we found! It incorporates flavors
            and scents from many, many different cultures around the...
          </p>
        </article>
      </div>
    );
  }
}

export default result;
