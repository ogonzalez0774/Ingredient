import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer has-background-info">
        <div className="content has-text-centered has-text-white">
          <p>
            <strong className="has-text-white">SupperTime</strong> by
            <a
              href="https://github.com/ogonzalez0774"
              className="has-text-white"
            >
              Oscar
            </a>
            ,
            <a href="https://github.com/trvcytg" className="has-text-white">
              Todd
            </a>
            ,
            <a href="https://github.com/lucodyne" className="has-text-white">
              Sean
            </a>
            ,
            <a href="https://github.com/kellyxj" className="has-text-white">
              Kelly
            </a>
            . With the help of React & Bulma.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
