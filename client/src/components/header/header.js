import React from "react";
import API from "../../utils/API";

class Header extends React.Component {
    render() {
        return (
            <section className="hero is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Supper Time</h1>
                        <h2 className="subtitle">Hello, username!</h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;