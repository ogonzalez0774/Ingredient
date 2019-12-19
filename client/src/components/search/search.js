import React from "react";

function Search(props) {
  return (
    <div className="tile">
      <div className="tile is-parent">
        <article className="tile is-child notification is-bold has-background-grey-light">
          <p className="title has-text-white">Search:</p>
          <div className="field">
            <div className="control">
              <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="input is-success"
                placeholder="What're you hungry for?"
                id="search"
              />
              <button className="button is-success" onClick={recipeSearch()}>
                Search
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Search;
