import React from "react";

class OpenLogin extends React.Component {
  render() {
    return (
      <button
        className="button is-small is-info is-outlined is-inverted"
        onClick={this.props.openLogin}
      >
        Log In
      </button>
    );
  }
}

export default OpenLogin;
