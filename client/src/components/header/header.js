import React from "react";
import Logo from "./SupperTimeWeb.jpg";
import SignoutButton from "../authbuttons/signOut";
import OpenLogin from "../authbuttons/openLogin";
import OpenSignUp from "../authbuttons/openSignUp";
import "./header.css";
import { FirebaseContext } from "../firebase/context";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar is-fixed-top has-background-info">
        <div className="navbar-content">
          <h1 className="navbar-item ">
            <img
              src={Logo}
              alt="SupperTime Logo"
              className="logo"
              width="60"
              height="80"
            />
            <a href="/" className="title has-text-white">
              <span className="alignVert"> &nbsp;Supper Time</span>
            </a>
          </h1>

          <h2 className="navbar-item subtitle has-text-white is-pulled-left">
            Welcome{this.props.username ? "," : "!"}&nbsp;
            <a href="/pantry" className=" has-text-warning">
              {this.props.username ? this.props.username : ""}
            </a>
            {this.props.username ? "!" : ""}
          </h2>
        </div>
        <div className="navbar-end">
          {this.props.username ? (
            <>
              <div className="navbar-item is-pulled-left">
                <a
                  href="/pantry"
                  className="button is-small is-success is-outlined is-inverted"
                >
                  My Pantry
                </a>
              </div>
              <div className="navbar-item is-pulled-left"></div>
              <FirebaseContext.Consumer>
                {firebase => (
                  <SignoutButton firebase={firebase}></SignoutButton>
                )}
              </FirebaseContext.Consumer>
            </>
          ) : (
            <div className="is-pulled-left">
              <OpenSignUp openSignup={this.props.openSignup} />
              <OpenLogin openLogin={this.props.openLogin} />
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default Header;
