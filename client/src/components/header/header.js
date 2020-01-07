import React from "react";

import SignoutButton from "../authbuttons/signOut";
import OpenLogin from "../authbuttons/openLogin";
import OpenSignUp from "../authbuttons/openSignUp";
// import "./header.css";
import { FirebaseContext } from "../firebase/context";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar is-fixed-top has-background-info">
        <div className="navbar-content">
          <h1 className="navbar-item ">
            <a href="/" className="title has-text-white">
              Supper Time
            </a>
          </h1>

          <h2 className="navbar-item subtitle has-text-white">
            Welcome
            <a href="/pantry">
              {this.props.username ? ", " + this.props.username : ""}
            </a>
            !
          </h2>
        </div>
        <div className="navbar-end">
          {this.props.username ? (
            <FirebaseContext.Consumer>
              {firebase => <SignoutButton firebase={firebase}></SignoutButton>}
            </FirebaseContext.Consumer>
          ) : (
            <>
              <OpenSignUp openSignup={this.props.openSignup} />
              <OpenLogin openLogin={this.props.openLogin} />
            </>
          )}
        </div>
      </nav>
    );
  }
}

export default Header;
