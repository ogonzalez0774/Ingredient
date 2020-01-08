import React from "react";

class OpenLogin extends React.Component {
  render() {
    return (
      <div className="navbar-item">
        <button className="button" onClick={this.props.openLogin}>
          Log In
        </button>
      </div>
    );
  }
}

export default OpenLogin;
