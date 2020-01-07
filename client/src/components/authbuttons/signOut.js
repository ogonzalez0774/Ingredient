import React from "react";

class SignoutButton extends React.Component {
  signout = () => {
    this.props.firebase.signOutUser();
  };
  render() {
    return (
      <div className="navbar-item">
        <button className="button" onClick={this.signout}>
          Sign Out
        </button>
      </div>
    );
  }
}

export default SignoutButton;
