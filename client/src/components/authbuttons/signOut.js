import React from "react";

class SignoutButton extends React.Component {
  signout = () => {
    this.props.firebase.signOutUser();
  };
  render() {
    return (
      <button className="button" onClick={this.signout}>
        Sign Out
      </button>
    );
  }
}

export default SignoutButton;
