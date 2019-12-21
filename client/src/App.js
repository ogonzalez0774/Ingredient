import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Pantry from "./pages/Pantry";
import Shoplist from "./pages/Shoplist";
import Container from "./pages/Container";
import API from "./utils/API";

class App extends React.Component {
    state = {
        userId: "5dfafab3a612c2884b4bd0bd",
        ingredients: []
    };

    componentDidMount() {
        this.loadPantry();
    }

    loadPantry = id => {
        API.getUser(id).then(user => {
            this.setState({ ingredients: user.data.ingredients });
        });
        this.forceUpdate();
    };

    render() {
        return (
            <>
                <Header />
                {/* <Container> */}
                <Pantry
                    ingredients={this.state.ingredients}
                    loadPantry={this.loadPantry}
                    userId={this.state.userId}
                />
                <Shoplist
                    ingredients={this.state.ingredients}
                    loadPantry={this.loadPantry}
                    userId={this.state.userId}
                />

                {/* </Container> */}
                <Footer />
            </>
        );
    }
}

export default App;
