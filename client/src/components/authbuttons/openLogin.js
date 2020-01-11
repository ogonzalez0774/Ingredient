import React from "react";

class OpenLogin extends React.Component {
  render() {
    return (
      <div className="navbar-item is-pulled-left">
        <button
          className="button is-small is-info is-outlined is-inverted"
          onClick={this.props.openLogin}
        >
          Log In
        </button>
      </div>
    );
  }
}

export default OpenLogin;
