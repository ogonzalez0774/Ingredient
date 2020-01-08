import React from "react";

class OpenSignup extends React.Component {
  render() {
    return (
      <div className="navbar-item">
        <button
          className="button is-small is-info is-outlined is-inverted"
          onClick={this.props.openSignup}
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default OpenSignup;
