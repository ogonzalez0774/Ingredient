import React from "react";
// import API from "../../utils/API";
class Header extends React.Component {
  render() {
    return (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <a href="/" className="has-text-white">
                Supper Time
              </a>
            </h1>
            <h2 className="subtitle">
              Welcome
              <a href="/pantry">
                {this.props.username ? ", " + this.props.username : ""}
              </a>
              !
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
