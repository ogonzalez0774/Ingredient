import React from "react";

class SignoutButton extends React.Component {
  signout = () => {
    this.props.firebase.signOutUser();
  };
  render() {
    return (
      <div className="navbar-item is-pulled-left noHorizontalPad">
        <button
          className="button is-small is-info is-outlined is-inverted"
          onClick={this.signout}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default SignoutButton;
