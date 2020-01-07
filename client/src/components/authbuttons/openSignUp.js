import React from "react";

class OpenSignup extends React.Component {
  render() {
    return (
      <div className="navbar-item">
        <button className="button" onClick={this.props.openSignup}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default OpenSignup;
