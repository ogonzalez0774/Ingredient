import React from "react";

class OpenSignup extends React.Component {
  render() {
    return (
      <button
        className="button is-small is-info is-outlined is-inverted"
        onClick={this.props.openSignup}
      >
        Sign Up
      </button>
    );
  }
}

export default OpenSignup;
